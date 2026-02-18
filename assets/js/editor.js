/**
 * PSA Manuais - Editor Module
 * Funções de edição, exportação e autenticação administrativa
 */

let isEditing = false;
let isAdmin = false;

/**
 * Hash de senha usando SHA-256
 */
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Verifica acesso administrativo (URL ?key=)
 * Persistência apenas em memória (Session-like).
 * Removido localStorage inseguro.
 */
async function checkAdminAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');

    if (key) {
        const targetHash = window.PSA_ADMIN_HASH;
        if (targetHash) {
            const currentHash = await hashPassword(key);
            if (currentHash === targetHash) {
                revealAdminInterface();
                const newUrl = window.location.pathname + window.location.hash;
                window.history.replaceState({}, document.title, newUrl);
            }
        }
    }
}

function revealAdminInterface() {
    isAdmin = true;
    const headerTools = document.getElementById('header-admin-tools');
    if (headerTools) {
        headerTools.style.display = 'flex';
        document.body.classList.add('admin-authorized');
    }
}

function adminLogout() {
    window.location.href = window.location.pathname;
}

/**
 * Alterna entre modo leitura e modo edição
 */
function toggleEditMode() {
    isEditing = !isEditing;
    const body = document.body;
    const btnIcon = document.getElementById('icon-edit-header');

    if (isEditing) {
        body.classList.add('editing-mode');
        if (btnIcon) btnIcon.textContent = 'save';
        document.querySelectorAll('.editable-text, .editable-area').forEach(el => {
            el.contentEditable = "true";
        });
    } else {
        body.classList.remove('editing-mode');
        if (btnIcon) btnIcon.textContent = 'edit';
        document.querySelectorAll('.editable-text, .editable-area').forEach(el => {
            el.contentEditable = "false";
        });
    }
}

/**
 * Lógica unificada de exportação de Markdown
 */
function handleMDExport() {
    const markdown = convertToMarkdown();
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'manual';
    const fileName = `manual_${pageTitle.replace(/[^a-z0-9]/gi, '_')}.md`;

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);

    if (isAdmin) {
        const repoUrl = window.PSA_GITHUB_URL || 'https://github.com';
        const currentPath = window.location.pathname;

        let uploadPath = "/upload/develop";
        if (currentPath.includes('/manuais/')) {
            const parts = currentPath.split('/manuais/');
            const manualSlug = parts[1].split('/')[0];
            uploadPath += "/manuais/" + manualSlug;
        }

        const finalUrl = repoUrl + uploadPath;
        setTimeout(() => window.open(finalUrl, '_blank'), 1000);
    }
}

/**
 * Slugify text for anchor links (Obsidian/GitHub compatible)
 */
function slugify(text) {
    return text.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^\w\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')     // Spaces to hyphens
        .replace(/-+/g, '-')      // Multiple hyphens to single
        .trim();
}

/**
 * Resolve image URL for export (MD and HTML)
 */
function resolveImageUrl(src, manualSlug, forAdmin) {
    const githubBaseUrl = 'https://alexandresilva-psa.github.io/Manuais_Ferramentas_PSA';
    if (!src || src.startsWith('http') || src.startsWith('data:')) return src;

    let relativePart = src;
    if (src.includes('/imagens/')) {
        const parts = src.split('/imagens/');
        relativePart = 'imagens/' + parts[parts.length - 1];
    } else if (src.includes('assets/')) {
        const parts = src.split('assets/');
        relativePart = 'assets/' + parts[parts.length - 1];
    }

    if (forAdmin) return relativePart;

    if (relativePart.startsWith('assets/')) {
        return `${githubBaseUrl}/${relativePart}`;
    }
    return `${githubBaseUrl}/manuais/${manualSlug}/${relativePart}`;
}

/**
 * Get current manual slug from URL
 */
function getManualSlug() {
    if (window.location.pathname.includes('/manuais/')) {
        return window.location.pathname.split('/manuais/')[1].split('/')[0];
    }
    return '';
}

/**
 * Converte HTML para Markdown com TOC linkado
 */
function convertToMarkdown() {
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'Manual';
    const versao = document.querySelector('.badge-versao')?.textContent.trim() || '1.0';
    const githubUrl = window.PSA_GITHUB_URL || 'https://github.com';
    const secoes = document.querySelectorAll('.secao');
    const manualSlug = getManualSlug();

    // Generate front-matter YAML TOC
    let tocYaml = 'toc:\n';
    secoes.forEach(secao => {
        const id = secao.id;
        const h2 = secao.querySelector('.secao-header h2')?.textContent.trim() || 'Sem Título';
        tocYaml += `  - id: ${id}\n    title: "${h2.replace(/"/g, '\\"')}"\n`;
        const subitems = secao.querySelectorAll('.secao-conteudo h3');
        if (subitems.length > 0) {
            tocYaml += `    items:\n`;
            subitems.forEach(h3 => {
                tocYaml += `      - id: ${h3.id}\n        title: "${h3.textContent.trim().replace(/"/g, '\\"')}"\n`;
            });
        }
    });

    let md = `---\nlayout: manual\ntitle: "${pageTitle}"\nversao: "${versao}"\ngithub_url: "${githubUrl}"\n${tocYaml}---\n\n`;

    // Generate Markdown TOC with anchor links
    md += `## Sumário\n\n`;
    secoes.forEach(secao => {
        const h2 = secao.querySelector('.secao-header h2')?.textContent.trim();
        if (h2) {
            const anchor = slugify(h2);
            md += `- [${h2}](#${anchor})\n`;

            secao.querySelectorAll('.secao-conteudo h3').forEach(h3 => {
                const subTitle = h3.textContent.trim();
                const subAnchor = slugify(subTitle);
                md += `  - [${subTitle}](#${subAnchor})\n`;
            });
        }
    });
    md += `\n---\n\n`;

    /**
     * Recursively convert a DOM node to Markdown.
     * Handles all PSA custom elements: .dica, .img-container, .img-wrapper,
     * .lista-dicas, .secao-numero, and standard HTML tags.
     */
    const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) return node.textContent;
        if (node.nodeType !== Node.ELEMENT_NODE) return '';

        const tag = node.tagName.toLowerCase();
        const classList = node.classList;

        // --- Skip elements that should not appear in MD ---
        if (classList.contains('secao-numero')) return '';
        if (classList.contains('floating-toolbar')) return '';
        if (classList.contains('section-delete-btn')) return '';
        if (classList.contains('marker-delete-btn')) return '';
        if (classList.contains('marker')) return '';

        // --- Headings ---
        if (tag === 'h2') {
            const text = node.textContent.trim();
            const anchor = slugify(text);
            return `\n## ${text} {#${anchor}}\n\n`;
        }
        if (tag === 'h3') {
            const text = node.textContent.trim();
            const anchor = slugify(text);
            return `\n### ${text} {#${anchor}}\n\n`;
        }
        if (tag === 'h4') {
            return `\n#### ${node.textContent.trim()}\n\n`;
        }

        // --- Dica (info/tip box) → blockquote ---
        if (classList.contains('dica')) {
            // Get text content, skipping the material icon span
            let dicaText = '';
            node.querySelectorAll('p').forEach(p => {
                dicaText += p.textContent.trim() + ' ';
            });
            if (!dicaText.trim()) {
                // Fallback: get all text minus the icon
                dicaText = node.textContent.trim();
            }
            return `\n> 💡 ${dicaText.trim()}\n\n`;
        }

        // --- Paragraphs ---
        if (tag === 'p') {
            if (classList.contains('img-caption')) {
                return `*${node.textContent.trim()}*\n\n`;
            }
            let pContent = '';
            node.childNodes.forEach(child => pContent += processNode(child));
            const trimmed = pContent.trim();
            if (!trimmed) return '';
            return `${trimmed}\n\n`;
        }

        // --- Inline formatting ---
        if (tag === 'strong' || tag === 'b') {
            let inner = '';
            node.childNodes.forEach(c => inner += processNode(c));
            return `**${inner.trim()}**`;
        }
        if (tag === 'em' || tag === 'i') {
            let inner = '';
            node.childNodes.forEach(c => inner += processNode(c));
            return `*${inner.trim()}*`;
        }
        if (tag === 'code') return `\`${node.textContent}\``;
        if (tag === 'br') return '\n';
        if (tag === 'a') {
            const href = node.getAttribute('href') || '';
            let inner = '';
            node.childNodes.forEach(c => inner += processNode(c));
            return `[${inner.trim()}](${href})`;
        }

        // --- Lists ---
        if (tag === 'ul') {
            let output = '';
            node.querySelectorAll(':scope > li').forEach(li => {
                let liContent = '';
                li.childNodes.forEach(c => liContent += processNode(c));
                output += `- ${liContent.trim()}\n`;
            });
            return output + '\n';
        }
        if (tag === 'ol') {
            let output = '';
            let idx = 1;
            node.querySelectorAll(':scope > li').forEach(li => {
                let liContent = '';
                li.childNodes.forEach(c => liContent += processNode(c));
                output += `${idx}. ${liContent.trim()}\n`;
                idx++;
            });
            return output + '\n';
        }
        if (tag === 'li') {
            let liContent = '';
            node.childNodes.forEach(c => liContent += processNode(c));
            return liContent;
        }

        // --- Images ---
        if (tag === 'img') {
            const alt = node.alt || 'Imagem';
            const src = node.getAttribute('src');
            const finalUrl = resolveImageUrl(src, manualSlug, isAdmin);
            return `\n![${alt}](${finalUrl})\n\n`;
        }

        // --- Tables ---
        if (tag === 'table') {
            let output = '\n';
            const rows = node.querySelectorAll('tr');
            rows.forEach((row, rowIdx) => {
                const cells = row.querySelectorAll('th, td');
                const cellTexts = Array.from(cells).map(c => c.textContent.trim());
                output += '| ' + cellTexts.join(' | ') + ' |\n';
                if (rowIdx === 0) {
                    output += '| ' + cellTexts.map(() => '---').join(' | ') + ' |\n';
                }
            });
            return output + '\n';
        }

        // --- Generic containers: recurse ---
        if (tag === 'div' || tag === 'span' || tag === 'section' || tag === 'nav' ||
            tag === 'main' || tag === 'article' || tag === 'figure' || tag === 'figcaption') {
            let output = '';
            node.childNodes.forEach(c => output += processNode(c));
            return output;
        }

        // --- Fallback: just return text content for unknown elements ---
        return node.textContent;
    };

    // Process each section
    secoes.forEach(secao => {
        const h2 = secao.querySelector('.secao-header h2')?.textContent.trim();
        if (h2) {
            const secaoNumero = secao.querySelector('.secao-numero')?.textContent.trim();
            const fullTitle = secaoNumero ? `${secaoNumero}. ${h2}` : h2;
            const anchor = slugify(fullTitle);
            md += `## ${fullTitle} {#${anchor}}\n\n`;
        }
        const conteudo = secao.querySelector('.secao-conteudo');
        if (conteudo) {
            conteudo.childNodes.forEach(n => md += processNode(n));
        }
        md += `\n`;
    });

    return md;
}

/**
 * Collect all loaded CSS from the current page as inline text.
 * Reads from <style> tags and accessible <link> stylesheets.
 */
function collectInlineCSS() {
    let css = '';

    // 1. Collect from already-loaded stylesheets (works for same-origin CSS)
    for (const sheet of document.styleSheets) {
        try {
            const href = sheet.href || '';
            // Skip Google Fonts / icon font stylesheets (they'll be kept as <link> tags)
            if (href.includes('fonts.googleapis.com') || href.includes('fonts.gstatic.com')) continue;

            for (const rule of sheet.cssRules) {
                css += rule.cssText + '\n';
            }
        } catch (e) {
            // Cross-origin stylesheets can't be read — skip silently
            console.warn('Could not read stylesheet:', sheet.href);
        }
    }

    // 2. Fallback: if no CSS was collected, grab from <style> tags in the page
    if (!css.trim()) {
        document.querySelectorAll('style').forEach(style => {
            css += style.textContent + '\n';
        });
    }

    return css;
}

/**
 * Export HTML — Full-fidelity manual with GitHub Pages image links.
 * Clones the ENTIRE rendered page including sidebar, header, and content.
 * Resolves all image src to absolute GitHub Pages URLs.
 * Inlines all CSS, preserves anchor links.
 * Removes only admin/editing tools.
 */
function shareManual() {
    const githubBaseUrl = 'https://alexandresilva-psa.github.io/Manuais_Ferramentas_PSA';
    const manualSlug = getManualSlug();
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'Manual';

    try {
        // 1. Collect CSS from the current page
        const inlineCSS = collectInlineCSS();

        // 2. Clone the entire document <html> element
        const docClone = document.documentElement.cloneNode(true);

        // 3. Remove ALL <script> tags (we'll add only nav/sidebar JS back)
        docClone.querySelectorAll('script').forEach(el => el.remove());

        // 4. Remove admin/editor-only elements
        docClone.querySelectorAll([
            '#admin-toolbar',
            '#header-admin-tools',
            '.section-delete-btn',
            '.marker-delete-btn',
            '.marker',
            '.floating-toolbar'
        ].join(',')).forEach(el => el.remove());

        // 5. Remove external CSS <link> tags (we'll inline the CSS)
        docClone.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
            const href = link.getAttribute('href') || '';
            // Keep Google Fonts and Material Icons
            if (href.includes('fonts.googleapis.com') || href.includes('fonts.gstatic.com')) {
                return;
            }
            link.remove();
        });

        // 6. Remove any existing <style> tags (we'll add one unified style)
        docClone.querySelectorAll('style').forEach(el => el.remove());

        // 7. Add unified inlined CSS
        const styleEl = docClone.ownerDocument.createElement('style');
        styleEl.textContent = inlineCSS + `
/* Export-specific overrides */
#header-admin-tools { display: none !important; }
.section-delete-btn { display: none !important; }
#admin-toolbar { display: none !important; }
.marker, .marker-delete-btn { display: none !important; }
.floating-toolbar { display: none !important; }
body { overflow: auto; height: auto; }
.layout { overflow: visible; }
.main-content { overflow: visible; height: auto; }

/* Keep sidebar visible and functional */
.sidebar { display: flex !important; }
`;
        const headEl = docClone.querySelector('head');
        if (headEl) headEl.appendChild(styleEl);

        // 8. Remove the "Baixar" header tools buttons (download/md/pdf)
        docClone.querySelectorAll('.header-right .header-tools').forEach(el => el.remove());
        // Also remove the theme toggle
        const themeToggle = docClone.querySelector('#theme-toggle');
        if (themeToggle) themeToggle.remove();

        // 9. Fix image URLs — resolve to absolute GitHub Pages paths
        docClone.querySelectorAll('img').forEach(img => {
            const src = img.getAttribute('src');
            if (!src || src.startsWith('data:')) return;

            // Already absolute
            if (src.startsWith('http://') || src.startsWith('https://')) return;

            // Resolve relative paths to GitHub Pages URLs
            const resolved = resolveImageUrl(src, manualSlug, false);
            if (resolved) img.setAttribute('src', resolved);
        });

        // 10. Fix anchor links
        docClone.querySelectorAll('a').forEach(a => {
            const href = a.getAttribute('href');
            if (!href) return;
            if (href.startsWith('#')) return; // sidebar navigation
            if (href.startsWith('http') || href.startsWith('mailto:')) return;
            // Convert relative links to absolute GitHub Pages links
            const clean = href.replace(/^(\.\.\/)+/, '').replace(/^\//, '');
            a.setAttribute('href', `${githubBaseUrl}/${clean}`);
        });

        // 11. Expand all sidebar nav groups so TOC is visible
        docClone.querySelectorAll('.nav-group.collapsed').forEach(group => {
            group.classList.remove('collapsed');
        });

        // 12. Add minimal JS for sidebar toggle and anchor navigation
        const navScript = docClone.ownerDocument.createElement('script');
        navScript.textContent = `
// Sidebar accordion toggle
function toggleNavGroup(el) {
    var group = el.closest('.nav-group');
    if (group) group.classList.toggle('collapsed');
}

// Smooth scroll for sidebar links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-item').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                var target = document.getElementById(href.substring(1));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    document.querySelectorAll('.nav-item').forEach(function(i) { i.classList.remove('active'); });
                    this.classList.add('active');
                }
            }
        });
    });
});
`;
        docClone.querySelector('body').appendChild(navScript);

        // 13. Build final HTML string
        const htmlContent = '<!DOCTYPE html>\n' + docClone.outerHTML;

        // 14. Download
        const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Manual_${pageTitle.replace(/[^a-z0-9]/gi, '_')}.html`;
        document.body.appendChild(a);
        a.click();

        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 200);

    } catch (err) {
        console.error('shareManual error:', err);
        alert('Erro ao gerar HTML: ' + err.message);
    }
}

/**
 * Client-Side PDF Generation (html2pdf.js)
 */
async function downloadGeneratedPDF() {
    if (typeof html2pdf === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        script.onload = generateClientPDF;
        document.head.appendChild(script);
    } else {
        generateClientPDF();
    }
}

function generateClientPDF() {
    const element = document.querySelector('.content-wrapper') || document.body;
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'Manual';

    // Show progress overlay
    const statusMsg = document.createElement('div');
    statusMsg.id = 'pdf-status';
    statusMsg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#111827;color:#fff;padding:20px 40px;border-radius:12px;z-index:9999;font-family:Work Sans,sans-serif;font-size:14px;box-shadow:0 8px 30px rgba(0,0,0,0.4);';
    statusMsg.textContent = '⏳ Gerando PDF… Isso pode demorar um pouco.';
    document.body.appendChild(statusMsg);

    // --- CRITICAL FIX ---
    // html2canvas can only capture visible content.
    // body has overflow:hidden + height:100vh, .layout has overflow:hidden,
    // .main-content has overflow-y:auto — all of these prevent html2canvas
    // from seeing scrollable content, resulting in blank PDFs.
    const body = document.body;
    const layout = document.querySelector('.layout');
    const mainContent = document.querySelector('.main-content');
    const sidebar = document.querySelector('.sidebar');

    // Save original styles
    const savedStyles = {
        bodyOverflow: body.style.overflow,
        bodyHeight: body.style.height,
        layoutOverflow: layout ? layout.style.overflow : '',
        layoutHeight: layout ? layout.style.height : '',
        mainOverflow: mainContent ? mainContent.style.overflow : '',
        mainHeight: mainContent ? mainContent.style.height : '',
        sidebarDisplay: sidebar ? sidebar.style.display : '',
    };

    // Override for html2canvas: make everything visible
    body.style.overflow = 'visible';
    body.style.height = 'auto';
    if (layout) {
        layout.style.overflow = 'visible';
        layout.style.height = 'auto';
    }
    if (mainContent) {
        mainContent.style.overflow = 'visible';
        mainContent.style.height = 'auto';
    }
    // Hide sidebar from PDF
    if (sidebar) sidebar.style.display = 'none';

    // Hide admin tools
    const adminTools = document.querySelectorAll('.section-delete-btn, #admin-toolbar, .floating-toolbar, .marker');
    adminTools.forEach(el => el.style.display = 'none');

    const opt = {
        margin: [10, 10, 10, 10],
        filename: `manual_${pageTitle.replace(/[^a-z0-9]/gi, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            logging: false,
            scrollX: 0,
            scrollY: 0,
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        // Restore all original styles
        body.style.overflow = savedStyles.bodyOverflow;
        body.style.height = savedStyles.bodyHeight;
        if (layout) {
            layout.style.overflow = savedStyles.layoutOverflow;
            layout.style.height = savedStyles.layoutHeight;
        }
        if (mainContent) {
            mainContent.style.overflow = savedStyles.mainOverflow;
            mainContent.style.height = savedStyles.mainHeight;
        }
        if (sidebar) sidebar.style.display = savedStyles.sidebarDisplay;
        adminTools.forEach(el => el.style.display = '');

        const s = document.getElementById('pdf-status');
        if (s) s.remove();
    }).catch(err => {
        console.error('PDF generation error:', err);
        alert('Erro ao gerar PDF: ' + err.message);

        // Restore styles on error too
        body.style.overflow = savedStyles.bodyOverflow;
        body.style.height = savedStyles.bodyHeight;
        if (layout) {
            layout.style.overflow = savedStyles.layoutOverflow;
            layout.style.height = savedStyles.layoutHeight;
        }
        if (mainContent) {
            mainContent.style.overflow = savedStyles.mainOverflow;
            mainContent.style.height = savedStyles.mainHeight;
        }
        if (sidebar) sidebar.style.display = savedStyles.sidebarDisplay;
        adminTools.forEach(el => el.style.display = '');

        const s = document.getElementById('pdf-status');
        if (s) s.remove();
    });
}

function deleteSection(btn) {
    if (confirm('Tem certeza que deseja excluir esta seção inteira?')) {
        btn.closest('.secao').remove();
    }
}

function initEditorExtras() {
    document.querySelectorAll('.secao-header').forEach(header => {
        if (header.querySelector('.section-delete-btn')) return;

        const btn = document.createElement('button');
        btn.className = 'section-delete-btn';
        btn.innerHTML = '<span class="material-icons-round">delete_forever</span>';
        btn.title = "Excluir esta seção";
        btn.onclick = () => deleteSection(btn);
        header.appendChild(btn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initEditorExtras();
    checkAdminAccess();
});
