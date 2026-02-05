/**
 * PSA Manuais - Editor Module
 * Funções de edição, exportação e autenticação administrativa
 */

let isEditing = false;
let isAdmin = false;

/**
 * Verifica acesso administrativo (LocalStorage ou URL ?key=)
 */
/**
 * Verifica acesso administrativo (URL ?key=)
 * Persistência apenas em memória (Session-like) via URL hash ou nada.
 * Removido localStorage inseguro.
 */
async function checkAdminAccess() {
    // Check URL for key
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');

    if (key) {
        const targetHash = window.PSA_ADMIN_HASH;
        if (targetHash) {
            const currentHash = await hashPassword(key);
            if (currentHash === targetHash) {
                // Apenas libera a interface, sem salvar nada permanente
                revealAdminInterface();
                
                // Content cleaning: remove key from URL
                const newUrl = window.location.pathname + window.location.hash;
                window.history.replaceState({}, document.title, newUrl);
            }
        }
    }
}

// ... helper hashPassword ...

function revealAdminInterface() {
    isAdmin = true;
    const headerTools = document.getElementById('header-admin-tools');
    if (headerTools) {
        headerTools.style.display = 'flex';
        document.body.classList.add('admin-authorized');
    }
}

function adminLogout() {
    // Recarregar a página limpa o estado de memória
    window.location.href = window.location.pathname;
}

// ... toggleEditMode ...

/**
 * Lógica unificada de exportação de Markdown
 */
function handleMDExport() {
    const markdown = convertToMarkdown();
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'manual';
    const fileName = `manual_${pageTitle.replace(/[^a-z0-9]/gi, '_')}.md`;

    // Download local
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

    // Se for Admin (Modo Edição Ativo ou Interface Visível), abre GitHub
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
 * Converte HTML para Markdown
 * Lógica de Imagem: Split-based para evitar duplicidade
 */
function convertToMarkdown() {
    // 1. Dados Globais
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'Manual';
    const versao = document.querySelector('.badge-versao')?.textContent.trim() || '1.0';
    const githubUrl = window.PSA_GITHUB_URL || 'https://github.com';
    const githubBaseUrl = 'https://alexandresilva-psa.github.io/Manuais_Ferramentas_PSA';

    // 2. Construir TOC (Mantido logicamente igual, omitido por brevidade se não mudou)
    let tocYaml = 'toc:\n';
    const secoes = document.querySelectorAll('.secao');
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

    // 3. Front Matter
    let md = `---\nlayout: manual\ntitle: "${pageTitle}"\nversao: "${versao}"\ngithub_url: "${githubUrl}"\n${tocYaml}---\n\n`;

    // Slug Detection
    let manualSlug = '';
    if (window.location.pathname.includes('/manuais/')) {
        manualSlug = window.location.pathname.split('/manuais/')[1].split('/')[0];
    }

    const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) return node.textContent;
        if (node.nodeType !== Node.ELEMENT_NODE) return '';

        const tag = node.tagName.toLowerCase();
        let output = '';

        if (tag === 'h3') output = `\n### ${node.textContent.trim()}\n\n`;
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
                // LÓGICA SPLIT SIMPLIFICADA
                // Queremos: 
                // Admin (Repo): "imagens/arquivo.png"
                // User (Obsidian): "https://alexandre.../manuais/slug/imagens/arquivo.png"
                
                // Tenta extrair o nome do arquivo final (assumindo estrutura padrao)
                // Se o src for ".../imagens/foto.png", pega "imagens/foto.png"
                let relativePart = src;
                if (src.includes('/imagens/')) {
                    const parts = src.split('/imagens/');
                    relativePart = 'imagens/' + parts[parts.length - 1]; // Pega a ultima parte
                } else if (src.includes('assets/')) {
                     // Caso seja asset global
                     const parts = src.split('assets/');
                     relativePart = 'assets/' + parts[parts.length - 1];
                }

                if (isAdmin) {
                    // Modo Edição: Caminho relativo do repo
                    finalUrl = relativePart;
                } else {
                    // Modo Leitura: Caminho Absoluto Web
                    // Se for asset global
                    if (relativePart.startsWith('assets/')) {
                         finalUrl = `${githubBaseUrl}/${relativePart}`;
                    } else {
                         // Se for manual
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
        if (h2) md += `## ${h2}\n\n`;
        const conteudo = secao.querySelector('.secao-conteudo');
        if (conteudo) conteudo.childNodes.forEach(n => md += processNode(n));
        md += `\n`;
    });

    return md;
}

/**
 * Export HTML
 * Fix: Absolute CSS Paths
 */
function shareManual() {
    const clone = document.documentElement.cloneNode(true);
    const githubBaseUrl = 'https://alexandresilva-psa.github.io/Manuais_Ferramentas_PSA';

    // Limpeza
    clone.querySelectorAll('#header-admin-tools, .section-delete-btn, .marker-delete-btn').forEach(el => el.remove());
    clone.querySelectorAll('script').forEach(s => s.remove()); // Remove scripts para ser estatico limpo

    // Fix CSS Links (Ensure Absolute)
    clone.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http')) {
            // Se for /assets..., vira https://.../assets...
            // Remove ../ e / inicial
            const clean = href.replace(/^(\.\.\/)+/, '').replace(/^\//, '');
            link.href = `${githubBaseUrl}/${clean}`;
        }
    });

    // Fix Images
    clone.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('data:')) {
             if (src.includes('/imagens/')) {
                 const parts = src.split('/imagens/');
                 const relativePart = 'imagens/' + parts[parts.length - 1];
                 // Manual context
                 let manualSlug = '';
                 if (window.location.pathname.includes('/manuais/')) manualSlug = window.location.pathname.split('/manuais/')[1].split('/')[0];
                 img.src = `${githubBaseUrl}/manuais/${manualSlug}/${relativePart}`;
             } else if (src.includes('assets/')) {
                  const parts = src.split('assets/');
                  img.src = `${githubBaseUrl}/assets/${parts[parts.length - 1]}`;
             }
        }
    });
    
    // Fix Links (Anchors)
    clone.querySelectorAll('a').forEach(a => {
         const href = a.getAttribute('href');
         if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
              // Resolve similar to images default
              const clean = href.replace(/^(\.\.\/)+/, '').replace(/^\//, '');
              a.href = `${githubBaseUrl}/${clean}`;
         }
    });

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
    // 1. Load library dynamically if not present
    if (typeof html2pdf === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        script.onload = generateClientPDF; // Call after load
        document.head.appendChild(script);
    } else {
        generateClientPDF();
    }
}

function generateClientPDF() {
    const element = document.querySelector('.content-wrapper') || document.body;
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'Manual';
    
    const opt = {
        margin:       10,
        filename:     `manual_${pageTitle.replace(/[^a-z0-9]/gi, '_')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Temporarily hide admin tools if visible
    const adminTools = document.querySelectorAll('.section-delete-btn');
    adminTools.forEach(el => el.style.display = 'none');

    html2pdf().set(opt).from(element).save().then(() => {
        // Restore UI
        adminTools.forEach(el => el.style.display = '');
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initEditorExtras();
    checkAdminAccess();
});
