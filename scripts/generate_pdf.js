const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const puppeteer = require('puppeteer');
const httpServer = require('http-server');

// Configurations
const SITE_DIR = '_site';
const PDF_DIR = path.join(SITE_DIR, 'assets', 'pdfs');
const BASE_URL = 'Manuais_Ferramentas_PSA'; // Your repository/site baseurl
const PORT = 8080;

async function generatePDFs() {
    console.log('🚀 Starting PDF Generation...');

    // 1. Ensure output directory exists
    if (!fs.existsSync(PDF_DIR)) {
        fs.mkdirSync(PDF_DIR, { recursive: true });
    }

    // 2. Symlink _site to the baseurl name to support absolute paths
    // e.g. /Manuais_Ferramentas_PSA/assets/... maps to _site/assets/...
    const symlinkPath = path.join(process.cwd(), BASE_URL);
    if (!fs.existsSync(symlinkPath)) {
        try {
            // Check if _site exists (it should after jekyll build)
            if (!fs.existsSync(SITE_DIR)) {
                console.error(`❌ _site directory not found at ${path.resolve(SITE_DIR)}`);
                process.exit(1);
            }

            // Create symlink: ./Manuais_Ferramentas_PSA -> ./_site
            // Use relative path for better compatibility
            const relativeSiteDir = path.relative(process.cwd(), path.resolve(SITE_DIR));
            // 'junction' is for Windows, 'dir'/default is fine for Linux. Using 'junction' is safer on Windows.
            fs.symlinkSync(relativeSiteDir, symlinkPath, 'junction');
            console.log(`🔗 Created symlink for baseurl: ${symlinkPath} -> ${relativeSiteDir}`);
        } catch (e) {
            console.warn(`⚠️ Could not create symlink (might exist or permission error): ${e.message}`);
        }
    }

    // 3. Start local server
    const server = httpServer.createServer({ root: process.cwd() });
    server.listen(PORT);
    console.log(`📡 Server started at http://localhost:${PORT}`);

    // 4. Launch Puppeteer
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        // 5. Find Manuals (Scan the directory structure)
        // We look for folders in _site/manuais/
        const manuaisDir = path.join(SITE_DIR, 'manuais');
        if (!fs.existsSync(manuaisDir)) {
            console.error('❌ Manuais directory not found in _site.');
            process.exit(1);
        }

        const items = fs.readdirSync(manuaisDir, { withFileTypes: true });
        const manuals = items
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        console.log(`📚 Found ${manuals.length} manuals: ${manuals.join(', ')}`);

        // 6. Generate PDF for each manual
        for (const slug of manuals) {
            const pageUrl = `http://localhost:${PORT}/${BASE_URL}/manuais/${slug}/`;
            const pdfPath = path.join(PDF_DIR, `manual_${slug}.pdf`);

            console.log(`🖨️  Generating PDF for: ${slug}...`);

            const page = await browser.newPage();

            // Set Viewport (A4 approx width in px at 96dpi is ~794, but web pages usually render responsive)
            await page.setViewport({ width: 1280, height: 1024 });

            try {
                await page.goto(pageUrl, { waitUntil: 'networkidle0', timeout: 60000 });

                // Optional: Inject CSS/Cleanups if needed specifically for PDF tool (already handled by @media print)

                await page.pdf({
                    path: pdfPath,
                    format: 'A4',
                    printBackground: true,
                    margin: {
                        top: '10mm',
                        bottom: '10mm',
                        left: '10mm',
                        right: '10mm'
                    },
                    displayHeaderFooter: true,
                    headerTemplate: '<div style="font-size: 10px; margin-left: 20px;">' + slug.replace(/-/g, ' ').toUpperCase() + '</div>',
                    footerTemplate: '<div style="font-size: 10px; margin-right: 20px; width: 100%; text-align: right;">Página <span class="pageNumber"></span> de <span class="totalPages"></span></div>'
                });

                console.log(`✅ Saved: ${pdfPath}`);
            } catch (err) {
                console.error(`❌ Error scanning ${slug}: ${err.message}`);
            } finally {
                await page.close();
            }
        }

    } catch (error) {
        console.error('❌ Fatal Error:', error);
        process.exit(1);
    } finally {
        await browser.close();
        server.close();

        // Clean up symlink if we created it (optional, GHA cleans up workspace usually)
        if (fs.existsSync(symlinkPath)) {
            // fs.unlinkSync(symlinkPath); 
        }

        console.log('✨ All done.');
        process.exit(0);
    }
}

generatePDFs();
