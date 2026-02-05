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
 * Converte HTML para Markdown com TOC linkado
 */
function convertToMarkdown() {
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'Manual';
    const versao = document.querySelector('.badge-versao')?.textContent.trim() || '1.0';
    const githubUrl = window.PSA_GITHUB_URL || 'https://github.com';
    const githubBaseUrl = 'https://alexandresilva-psa.github.io/Manuais_Ferramentas_PSA';
    const secoes = document.querySelectorAll('.secao');

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

    let manualSlug = '';
    if (window.location.pathname.includes('/manuais/')) {
        manualSlug = window.location.pathname.split('/manuais/')[1].split('/')[0];
    }

    const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) return node.textContent;
        if (node.nodeType !== Node.ELEMENT_NODE) return '';

        const tag = node.tagName.toLowerCase();
        let output = '';

        if (tag === 'h3') {
            const text = node.textContent.trim();
            const anchor = slugify(text);
            output = `\n### ${text} {#${anchor}}\n\n`;
        }
        else if (tag === 'p') {
            if (node.classList.contains('img-caption')) {
                output = `*${node.textContent.trim()}*\n\n`;
            } else {
                let pContent = '';
                node.childNodes.forEach(child => pContent += processNode(child));
                output = `${pContent.trim()}\n\n`;
            }
        }
        else if (tag === 'strong' || tag === 'b') output = `**${node.textContent.trim()}**`;
        else if (tag === 'em' || tag === 'i') output = `*${node.textContent.trim()}*`;
        else if (tag === 'code') output = `\`${node.textContent}\``;
        else if (tag === 'ul') {
            node.querySelectorAll('li').forEach(li => {
                let liContent = '';
                li.childNodes.forEach(c => liContent += processNode(c));
                output += `- ${liContent.trim()}\n`;
            });
            output += '\n';
        }
        else if (tag === 'ol') {
            let idx = 1;
            node.querySelectorAll('li').forEach(li => {
                let liContent = '';
                li.childNodes.forEach(c => liContent += processNode(c));
                output += `${idx}. ${liContent.trim()}\n`;
                idx++;
            });
            output += '\n';
        }
        else if (tag === 'img') {
            const alt = node.alt || 'Imagem';
            const src = node.getAttribute('src');
            let finalUrl = src;

            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                let relativePart = src;
                if (src.includes('/imagens/')) {
                    const parts = src.split('/imagens/');
                    relativePart = 'imagens/' + parts[parts.length - 1];
                } else if (src.includes('assets/')) {
                    const parts = src.split('assets/');
                    relativePart = 'assets/' + parts[parts.length - 1];
                }

                if (isAdmin) {
                    finalUrl = relativePart;
                } else {
                    if (relativePart.startsWith('assets/')) {
                        finalUrl = `${githubBaseUrl}/${relativePart}`;
                    } else {
                        finalUrl = `${githubBaseUrl}/manuais/${manualSlug}/${relativePart}`;
                    }
                }
            }
            output = `\n![${alt}](${encodeURI(finalUrl)})\n\n`;
        }
        else if (tag === 'div' || tag === 'span' || tag === 'section') {
            node.childNodes.forEach(c => output += processNode(c));
        }
        return output;
    };

    secoes.forEach(secao => {
        const h2 = secao.querySelector('.secao-header h2')?.textContent.trim();
        if (h2) {
            const anchor = slugify(h2);
            md += `## ${h2} {#${anchor}}\n\n`;
        }
        const conteudo = secao.querySelector('.secao-conteudo');
        if (conteudo) conteudo.childNodes.forEach(n => md += processNode(n));
        md += `\n`;
    });

    return md;
}

/**
 * Export HTML - Fetch CSS and Inline it
 */
async function shareManual() {
    const githubBaseUrl = 'https://alexandresilva-psa.github.io/Manuais_Ferramentas_PSA';

    // 1. Fetch CSS to embed inline
    let inlineCSS = '';
    try {
        const cssUrl = `${githubBaseUrl}/assets/css/style.css`;
        const response = await fetch(cssUrl);
        if (response.ok) {
            inlineCSS = await response.text();
        }
    } catch (e) {
        console.warn('CSS fetch failed, export may have broken styles');
    }

    // 2. Clone and clean
    const clone = document.documentElement.cloneNode(true);
    clone.querySelectorAll('#header-admin-tools, .section-delete-btn, .marker-delete-btn').forEach(el => el.remove());
    clone.querySelectorAll('script').forEach(s => s.remove());

    // 3. Remove external CSS links and add inline style
    clone.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());
    if (inlineCSS) {
        const styleTag = document.createElement('style');
        styleTag.textContent = inlineCSS;
        clone.querySelector('head').appendChild(styleTag);
    }

    // 4. Fix image URLs (keep absolute GitHub Pages URLs)
    clone.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('data:')) {
            if (src.includes('/imagens/')) {
                const parts = src.split('/imagens/');
                const relativePart = 'imagens/' + parts[parts.length - 1];
                let manualSlug = '';
                if (window.location.pathname.includes('/manuais/')) manualSlug = window.location.pathname.split('/manuais/')[1].split('/')[0];
                img.src = `${githubBaseUrl}/manuais/${manualSlug}/${relativePart}`;
            } else if (src.includes('assets/')) {
                const parts = src.split('assets/');
                img.src = `${githubBaseUrl}/assets/${parts[parts.length - 1]}`;
            }
        }
    });

    // 5. Fix anchor links
    clone.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
            const clean = href.replace(/^(\.\.\/)+/, '').replace(/^\//, '');
            a.href = `${githubBaseUrl}/${clean}`;
        }
    });

    // 6. Download
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'Manual';
    const blob = new Blob(['<!DOCTYPE html>\n' + clone.outerHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Manual_${pageTitle.replace(/[^a-z0-9]/gi, '_')}.html`;
    a.click();
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

    const opt = {
        margin: 10,
        filename: `manual_${pageTitle.replace(/[^a-z0-9]/gi, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    const adminTools = document.querySelectorAll('.section-delete-btn');
    adminTools.forEach(el => el.style.display = 'none');

    html2pdf().set(opt).from(element).save().then(() => {
        adminTools.forEach(el => el.style.display = '');
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
