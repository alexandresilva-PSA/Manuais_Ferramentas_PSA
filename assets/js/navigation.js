/**
 * PSA Manuais - Navigation & Theme Module
 */

// --- THEME MANAGEMENT ---
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('psa_theme', newTheme);

    // Update icon
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.textContent = newTheme === 'dark' ? 'light_mode' : 'dark_mode';
    }
}

// --- SIDEBAR NAVIGATION ---

// Toggle root sidebar (if we want a mobile collapse)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('collapsed');
}

// Accordion Logic: Toggle secondary groups
function toggleNavGroup(header) {
    const group = header.parentElement;
    group.classList.toggle('collapsed');
}

// Scroll Highlighting with automatic accordion expansion
function initScrollHighlight() {
    const sections = document.querySelectorAll('.secao');
    const navLinks = document.querySelectorAll('.nav-item');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');

                        // Smart Auto-Expand: When a section is visible, make sure its parent group is expanded
                        const group = link.closest('.nav-group');
                        if (group && group.classList.contains('collapsed')) {
                            group.classList.remove('collapsed');
                        }
                    }
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-10% 0px -70% 0px'
    });

    sections.forEach(section => observer.observe(section));
}

// Search System (Sidebar Filter + Content Highlight)
function filterSidebarItems() {
    const input = document.getElementById('sidebar-search-input');
    if (!input) return;

    const filter = input.value.toLowerCase();

    // 1. Filter Sidebar
    const navGroups = document.querySelectorAll('.nav-group');
    navGroups.forEach(group => {
        let groupHasVisibleItems = false;
        const items = group.querySelectorAll('.nav-item');

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = 'flex';
                groupHasVisibleItems = true;
            } else {
                item.style.display = 'none';
            }
        });

        // Expand matching groups
        if (filter.length > 0) {
            if (groupHasVisibleItems) {
                group.classList.remove('collapsed');
                group.style.display = 'block';
            } else {
                group.style.display = 'none';
            }
        } else {
            group.classList.add('collapsed');
            group.style.display = 'block';
        }
    });

    // 2. Highlight Text in Content
    highlightSearchText(filter);
}

function highlightSearchText(query) {
    const content = document.querySelector('.main-content');
    if (!content) return;

    // Remove previous highlights
    // We use a safe approach: replacing mark tags with their text content
    const marks = content.querySelectorAll('mark.search-highlight');
    marks.forEach(mark => {
        mark.outerHTML = mark.textContent;
    });

    // Normalize
    content.normalize();

    if (!query || query.length < 2) return;

    // Recursive text node walker
    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
            // Skip text inside scripts or styles
            if (node.parentElement.tagName === 'SCRIPT' ||
                node.parentElement.tagName === 'STYLE') {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    const nodesToHighlight = [];
    while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.nodeValue.toLowerCase().includes(query)) {
            nodesToHighlight.push(node);
        }
    }

    // Apply Highlight
    let firstMatch = null;
    nodesToHighlight.forEach(node => {
        const span = document.createElement('span');
        const text = node.nodeValue;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');

        // Replace matches with mark tags
        const newHtml = text.replace(regex, '<mark class="search-highlight">$1</mark>');

        span.innerHTML = newHtml;

        // Replace text node with new HTML structure
        if (span.innerHTML !== text) { // Only if replacement happened
            // We need to insert the children of span before the text node and remove the text node
            const fragment = document.createDocumentFragment();
            while (span.firstChild) {
                fragment.appendChild(span.firstChild);
            }
            node.parentNode.replaceChild(fragment, node);

            if (!firstMatch) {
                firstMatch = document.querySelector('mark.search-highlight');
            }
        }
    });

    // Scroll to first match
    if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initScrollHighlight();

    // Sync theme icon on load based on already applied theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const icon = document.getElementById('theme-icon');
    if (icon && currentTheme === 'dark') {
        icon.textContent = 'light_mode';
    }
});
