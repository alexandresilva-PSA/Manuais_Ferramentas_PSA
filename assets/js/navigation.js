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

// Sidebar Search Filter
function filterSidebarItems() {
    const input = document.getElementById('sidebar-search-input');
    if (!input) return;

    const filter = input.value.toLowerCase();
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

        // Behavior: Expand matching groups, collapse unsuccessful ones
        if (filter.length > 0) {
            if (groupHasVisibleItems) {
                group.classList.remove('collapsed');
                group.style.display = 'block';
            } else {
                group.style.display = 'none';
            }
        } else {
            // Revert to default state (collapsed) when search is empty
            group.classList.add('collapsed');
            group.style.display = 'block';
        }
    });
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
