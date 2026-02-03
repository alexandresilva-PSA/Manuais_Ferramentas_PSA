/**
 * PSA Manuais - Editor Module
 * Funções de edição, exportação e autenticação administrativa
 */

let isEditing = false;
let isAdmin = false;

/**
 * Verifica acesso administrativo (LocalStorage ou URL ?key=)
 */
async function checkAdminAccess() {
    // 1. Check LocalStorage (persisted login)
    if (localStorage.getItem('psa_admin_access') === 'true') {
        revealAdminInterface();
        return;
    }

    // 2. Check URL for key
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');

    if (key) {
        const targetHash = window.PSA_ADMIN_HASH;
        if (targetHash) {
            const currentHash = await hashPassword(key);
            if (currentHash === targetHash) {
                localStorage.setItem('psa_admin_access', 'true');
                revealAdminInterface();

                // Content cleaning: remove key from URL without refreshing
                const newUrl = window.location.pathname + window.location.hash;
                window.history.replaceState({}, document.title, newUrl);
            }
        }
    }
}

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
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
    localStorage.removeItem('psa_admin_access');
    window.location.reload();
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

        // Enable contenteditable
        document.querySelectorAll('.editable-text, .editable-area').forEach(el => {
            el.contentEditable = "true";
        });
    } else {
        body.classList.remove('editing-mode');
        if (btnIcon) btnIcon.textContent = 'edit';

        // Disable contenteditable
        document.querySelectorAll('.editable-text, .editable-area').forEach(el => {
            el.contentEditable = "false";
        });
    }
}

/**
 * Lógica unificada de exportação de Markdown
 * Admin: Baixa e abre aba de upload do GitHub
 * Usuário: Apenas baixa o arquivo
 */
/**
 * Lógica unificada de exportação de Markdown
 * Admin: Baixa e abre aba de upload do GitHub
 * Usuário: Apenas baixa o arquivo
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

    // Se for Admin, abre a tela de upload do GitHub
    if (localStorage.getItem('psa_admin_access') === 'true') {
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
 * Converte o conteúdo HTML atual para Markdown (simplificado)
 */
function convertToMarkdown() {
    const content = document.querySelector('.content-wrapper');
    if (!content) return '# Manual\n\nConteúdo não encontrado.';

    // Base URL do GitHub Pages para imagens
    const githubBaseUrl = 'https://alexandresilva-psa.github.io/Manuais_Ferramentas_PSA';

    // Tenta detectar o slug do manual atual
    let manualSlug = '';
    if (window.location.pathname.includes('/manuais/')) {
        manualSlug = window.location.pathname.split('/manuais/')[1].split('/')[0];
    } else {
        // Fallback: tenta pegar do URL atual se não estiver na estrutura padrão
        const pathParts = window.location.pathname.split('/').filter(p => p && p !== 'Manuais_Ferramentas_PSA');
        if (pathParts.length > 0) manualSlug = pathParts[pathParts.length - 1];
    }

    let md = '';
    const title = document.querySelector('.header-title');
    const version = document.querySelector('.badge-versao');

    if (title) md += `# ${title.textContent.trim()}\n\n`;
    if (version) md += `**${version.textContent.trim()}**\n\n---\n\n`;

    // Process sections
    content.querySelectorAll('.secao').forEach(secao => {
        const h2 = secao.querySelector('.secao-header h2');
        if (h2) md += `## ${h2.textContent.trim()}\n\n`;

        const conteudo = secao.querySelector('.secao-conteudo');
        if (conteudo) {
            // Processa recursivamente para capturar img dentro de div container
            const processNode = (node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const tag = node.tagName.toLowerCase();
                    const text = node.textContent.trim();

                    if (tag === 'h3') md += `### ${text}\n\n`;
                    else if (tag === 'p' && !node.classList.contains('img-caption')) {
                        if (text) md += `${text}\n\n`;
                    }
                    else if (tag === 'img') {
                        const alt = node.alt || 'Imagem';
                        let src = node.getAttribute('src');

                        // Converte para URL absoluta do GitHub
                        let absoluteSrc = src;
                        if (!src.startsWith('http')) {
                            // Limpa paths relativos como ../
                            const cleanSrc = src.replace(/^(\.\.\/)+/, '').replace(/^\//, '');

                            // Se já tem o caminho completo assets/, usa direto
                            if (cleanSrc.startsWith('assets/')) {
                                absoluteSrc = `${githubBaseUrl}/${cleanSrc}`;
                            } else {
                                // Se é relativo ao manual (imagens/...)
                                absoluteSrc = `${githubBaseUrl}/manuais/${manualSlug}/${cleanSrc}`;
                            }
                        }

                        md += `![${alt}](${absoluteSrc})\n\n`;
                    }
                    else if (tag === 'ul') {
                        node.querySelectorAll('li').forEach(li => {
                            md += `- ${li.textContent.trim()}\n`;
                        });
                        md += '\n';
                    }
                    else if (tag === 'div' && node.classList.contains('img-container')) {
                        // Process children of img-container
                        node.childNodes.forEach(child => processNode(child));
                    }
                    else if (tag === 'div' && node.classList.contains('img-wrapper')) {
                        node.childNodes.forEach(child => processNode(child));
                    }
                }
            };

            conteudo.childNodes.forEach(node => processNode(node));
        }
        md += '\n---\n\n';
    });

    return md;
}

// Export read-only HTML version
function shareManual() {
    const clone = document.documentElement.cloneNode(true);
    // URL base fixa do GitHub Pages
    const githubBaseUrl = 'https://alexandresilva-psa.github.io/Manuais_Ferramentas_PSA';

    // Tenta detectar o slug para compor URLs relativas
    let manualSlug = '';
    if (window.location.pathname.includes('/manuais/')) {
        manualSlug = window.location.pathname.split('/manuais/')[1].split('/')[0];
    }

    clone.querySelectorAll('#header-admin-tools, .section-delete-btn, .marker-delete-btn').forEach(el => el.remove());

    // Remove scripts de edição
    clone.querySelectorAll('script').forEach(script => {
        if (script.src && (script.src.includes('editor.js') || script.src.includes('features.js'))) {
            // Keep features for zoom? User said "retains the zoom functionality"
            // If we keep features.js, we need to make sure it works in standalone HTML
            // But usually we sanitize. Let's keep common scripts but remove admin stuff.
        }
    });

    // Resolve Absolute URLs para o GitHub Pages
    clone.querySelectorAll('img, link, script').forEach(el => {
        const attr = el.tagName === 'LINK' ? 'href' : 'src';
        const val = el.getAttribute(attr);

        if (val && !val.startsWith('http') && !val.startsWith('data:')) {
            // Limpa paths relativos
            const cleanVal = val.replace(/^(\.\.\/)+/, '').replace(/^\//, '');
            let newVal = '';

            if (cleanVal.startsWith('assets/')) {
                // Assets globais
                newVal = `${githubBaseUrl}/${cleanVal}`;
            } else {
                // Assets locais do manual
                newVal = `${githubBaseUrl}/manuais/${manualSlug}/${cleanVal}`;
            }

            el.setAttribute(attr, newVal);
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

// Delete section
function deleteSection(btn) {
    if (confirm('Tem certeza que deseja excluir esta seção inteira?')) {
        btn.closest('.secao').remove();
    }
}

// Initialize delete buttons on section headers
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

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    initEditorExtras();
    checkAdminAccess();
});
