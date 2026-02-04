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
/**
 * Converte o conteúdo HTML atual para Markdown completo
 * Inclui Front Matter real e URLs absolutas para imagens
 */
function convertToMarkdown() {
    // 1. Coletar dados globais para Front Matter
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'Manual';
    const versao = document.querySelector('.badge-versao')?.textContent.trim() || '1.0';
    const githubUrl = window.PSA_GITHUB_URL || 'https://github.com';

    // 2. Construir TOC dinamicamente baseada no DOM atual
    let tocYaml = 'toc:\n';
    const secoes = document.querySelectorAll('.secao');

    secoes.forEach(secao => {
        const id = secao.id;
        const h2 = secao.querySelector('.secao-header h2')?.textContent.trim() || 'Sem Título';

        tocYaml += `  - id: ${id}\n`;
        tocYaml += `    title: "${h2.replace(/"/g, '\\"')}"\n`;

        // Subitems (H3)
        const subitems = secao.querySelectorAll('.secao-conteudo h3');
        if (subitems.length > 0) {
            tocYaml += `    items:\n`;
            subitems.forEach(h3 => {
                const subId = h3.id;
                const subTitle = h3.textContent.trim();
                tocYaml += `      - id: ${subId}\n`;
                tocYaml += `        title: "${subTitle.replace(/"/g, '\\"')}"\n`;
            });
        }
    });

    // 3. Montar Front Matter
    let md = `---\n`;
    md += `layout: manual\n`;
    md += `title: "${pageTitle}"\n`;
    md += `versao: "${versao}"\n`;
    md += `github_url: "${githubUrl}"\n`;
    md += `${tocYaml}`;
    md += `---\n\n`;

    // 4. Converter Conteúdo
    const githubBaseUrl = 'https://alexandresilva-psa.github.io/Manuais_Ferramentas_PSA';
    // Recuperar slug do manual para montar URLs corretas
    let manualSlug = '';
    if (window.location.pathname.includes('/manuais/')) {
        manualSlug = window.location.pathname.split('/manuais/')[1].split('/')[0];
    } else {
        const pathParts = window.location.pathname.split('/').filter(p => p && p !== 'Manuais_Ferramentas_PSA');
        if (pathParts.length > 0) manualSlug = pathParts[pathParts.length - 1];
    }

    const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent; // Text puro, MD lida com espaços
        }

        if (node.nodeType !== Node.ELEMENT_NODE) return '';

        const tag = node.tagName.toLowerCase();
        let output = '';

        // H3 (Subtítulos)
        if (tag === 'h3') {
            const id = node.id;
            // Adicionar âncora invisível ou confiar no Jekyll auto-link? 
            // O TOC usa IDs, e os H3 no MD original geram IDs automáticos.
            // Para garantir compatibilidade com o sidebar, precisamos manter os IDs nos headers?
            // Jekyll kramdown suporta `### Título {#id}`
            output = `\n### ${node.textContent.trim()}\n\n`;
        }
        // Parágrafos
        else if (tag === 'p') {
            if (node.classList.contains('img-caption')) {
                // Legenda da imagem: ignorar aqui, tratado junto com a img se possível, ou apenas texto itálico
                output = `*${node.textContent.trim()}*\n\n`;
            } else {
                // Processar filhos para manter formatação inline (strong, em, a)
                let pContent = '';
                node.childNodes.forEach(child => pContent += processNode(child));
                output = `${pContent.trim()}\n\n`;
            }
        }
        // Formatting
        else if (tag === 'strong' || tag === 'b') {
            output = `**${node.textContent.trim()}**`;
        }
        else if (tag === 'em' || tag === 'i') {
            output = `*${node.textContent.trim()}*`;
        }
        else if (tag === 'code') {
            output = `\`${node.textContent}\``;
        }
        // Imagens
        else if (tag === 'img') {
            const alt = node.alt || 'Imagem';
            let src = node.getAttribute('src');
            let absoluteSrc = src;

            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                const cleanSrc = src.replace(/^(\.\.\/)+/, '').replace(/^\//, '');
                if (cleanSrc.startsWith('assets/')) {
                    absoluteSrc = `${githubBaseUrl}/${cleanSrc}`;
                } else {
                    absoluteSrc = `${githubBaseUrl}/manuais/${manualSlug}/${cleanSrc}`;
                }
            }
            output = `\n![${alt}](${absoluteSrc})\n\n`;
        }
        // Listas
        else if (tag === 'ul') {
            node.querySelectorAll('li').forEach(li => {
                let liContent = '';
                li.childNodes.forEach(child => liContent += processNode(child));
                output += `- ${liContent.trim()}\n`;
            });
            output += '\n';
        }
        else if (tag === 'ol') {
            let idx = 1;
            node.querySelectorAll('li').forEach(li => {
                let liContent = '';
                li.childNodes.forEach(child => liContent += processNode(child));
                output += `${idx}. ${liContent.trim()}\n`;
                idx++;
            });
            output += '\n';
        }
        // Containers (divs de imagem, wrappers)
        else if (tag === 'div' || tag === 'span' || tag === 'section') {
            node.childNodes.forEach(child => output += processNode(child));
        }

        return output;
    };

    // Iterar Seções (H2 são definidos pela estrutura .secao)
    secoes.forEach(secao => {
        const h2 = secao.querySelector('.secao-header h2')?.textContent.trim();
        if (h2) md += `## ${h2}\n\n`;

        const conteudo = secao.querySelector('.secao-conteudo');
        if (conteudo) {
            conteudo.childNodes.forEach(node => {
                md += processNode(node);
            });
        }
        md += `\n`; // Espaço entre seções
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
