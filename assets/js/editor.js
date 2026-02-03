/**
 * PSA Manuais - Editor Module
 * Funções de edição, exportação e exclusão de seções
 */

let isEditing = false;

// Toggle edit mode
function toggleEditMode() {
    isEditing = !isEditing;
    const body = document.body;
    const btnIcon = document.getElementById('icon-edit');

    if (isEditing) {
        body.classList.add('editing-mode');
        if (btnIcon) btnIcon.textContent = 'check';

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

// Export read-only HTML version
function shareManual() {
    // 1. Clone the entire document
    const clone = document.documentElement.cloneNode(true);
    const baseUrl = window.location.href;

    // 2. Remove administrative/editing elements
    const toolbar = clone.querySelector('#admin-toolbar');
    if (toolbar) toolbar.remove();

    clone.querySelectorAll('.section-delete-btn, .marker-delete-btn').forEach(b => b.remove());

    // 3. Clean up floating toolbars (remove "Add Marker" button, keep zoom)
    clone.querySelectorAll('.floating-toolbar').forEach(ft => {
        const btnMarker = ft.querySelector('button[onclick*="addMarker"]');
        if (btnMarker) btnMarker.remove();

        const divider = ft.querySelector('div[style*="width:1px"]');
        if (divider) divider.remove();
    });

    // 4. Resolve Relative URLs to Absolute
    // This ensures the downloaded HTML works standalone by fetching assets from the server

    // Resolve Images
    clone.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('data:')) {
            img.setAttribute('src', new URL(src, baseUrl).href);
        }
    });

    // Resolve CSS
    clone.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http')) {
            link.setAttribute('href', new URL(href, baseUrl).href);
        }
    });

    // Resolve Scripts (and remove editor.js)
    clone.querySelectorAll('script').forEach(script => {
        const src = script.getAttribute('src');
        if (src) {
            if (src.includes('editor.js')) {
                script.remove();
            } else if (!src.startsWith('http')) {
                script.setAttribute('src', new URL(src, baseUrl).href);
            }
        }
    });

    // 5. Remove contenteditable and editing classes
    clone.querySelectorAll('[contenteditable="true"]').forEach(el => {
        el.removeAttribute('contenteditable');
        el.classList.remove('editable-text', 'editable-area');
    });

    const body = clone.querySelector('body');
    if (body) body.classList.remove('editing-mode');

    // 6. Generate and download HTML
    const pageTitle = document.querySelector('.header-title')?.textContent.trim() || 'Manual';
    const fileName = `Manual_${pageTitle.replace(/[^a-z0-9]/gi, '_')}.html`;

    const htmlContent = '<!DOCTYPE html>\n' + clone.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    // Cleanup with a small delay to ensure download starts in all browsers
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);
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

// ============================================================
// NEW: Export to Markdown + Open GitHub
// ============================================================

function exportAndCommit() {
    // 1. Convert HTML to Markdown
    const markdown = convertToMarkdown();

    // 2. Download MD file
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

    // 3. Open GitHub for commit (configure your repo URL)
    const githubUrl = window.PSA_GITHUB_URL || 'https://github.com';
    window.open(githubUrl, '_blank');
}

function convertToMarkdown() {
    const content = document.querySelector('.content-wrapper');
    if (!content) return '# Manual\n\nConteúdo não encontrado.';

    let md = '';
    const title = document.querySelector('.header-title');
    const version = document.querySelector('.badge-versao');

    if (title) md += `# ${title.textContent.trim()}\n\n`;
    if (version) md += `**${version.textContent.trim()}**\n\n---\n\n`;

    // Process sections
    content.querySelectorAll('.secao').forEach(secao => {
        const h2 = secao.querySelector('.secao-header h2');
        if (h2) {
            md += `## ${h2.textContent.trim()}\n\n`;
        }

        const conteudo = secao.querySelector('.secao-conteudo');
        if (conteudo) {
            // Process H3
            conteudo.querySelectorAll('h3').forEach(h3 => {
                md += `### ${h3.textContent.trim()}\n\n`;
            });

            // Process paragraphs
            conteudo.querySelectorAll('p').forEach(p => {
                md += `${p.textContent.trim()}\n\n`;
            });

            // Process images
            conteudo.querySelectorAll('img').forEach(img => {
                const alt = img.alt || 'Imagem';
                const src = img.src || img.getAttribute('src');
                md += `![${alt}](${src})\n\n`;
            });

            // Process lists
            conteudo.querySelectorAll('ul').forEach(ul => {
                ul.querySelectorAll('li').forEach(li => {
                    md += `- ${li.textContent.trim()}\n`;
                });
                md += '\n';
            });

            // Process tips
            conteudo.querySelectorAll('.dica p').forEach(dica => {
                md += `> 💡 **Dica:** ${dica.textContent.trim()}\n\n`;
            });

            // Process warnings
            conteudo.querySelectorAll('.aviso p').forEach(aviso => {
                md += `> ⚠️ **Aviso:** ${aviso.textContent.trim()}\n\n`;
            });
        }

        md += '\n---\n\n';
    });

    return md;
}

// Initialize editor on page load
document.addEventListener('DOMContentLoaded', () => {
    initEditorExtras();
});
