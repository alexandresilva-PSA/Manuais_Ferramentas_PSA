/**
 * PSA Manuais - Features Module
 * Sistema de zoom, marcadores e anotações em imagens
 */

// ============================================================
// IMAGE ZOOM SYSTEM
// ============================================================

// Auto-upgrade image wrappers to support zoom
function upgradeImagesToZoom() {
    document.querySelectorAll('.img-wrapper').forEach(wrapper => {
        // Skip if already processed
        if (wrapper.querySelector('.img-viewport')) return;

        const img = wrapper.querySelector('img');
        if (!img) return;

        // 1. Create viewport (zoom layer)
        const viewport = document.createElement('div');
        viewport.className = 'img-viewport';

        // 2. Move image inside viewport
        wrapper.appendChild(viewport);
        viewport.appendChild(img);

        // 3. Create floating toolbar
        const toolbar = document.createElement('div');
        toolbar.className = 'floating-toolbar';
        toolbar.innerHTML = `
            <button class="btn-float" onclick="controlZoom(this, 0.2)" title="Mais Zoom">
                <span class="material-icons-round">add</span>
            </button>
            <button class="btn-float" onclick="controlZoom(this, -0.2)" title="Menos Zoom">
                <span class="material-icons-round">remove</span>
            </button>
        `;
        wrapper.appendChild(toolbar);

        // 4. Initialize drag events
        initDragEvent(viewport);
    });
}

// Zoom control
function controlZoom(btn, delta) {
    const wrapper = btn.closest('.img-wrapper');
    const viewport = wrapper.querySelector('.img-viewport');

    let scale = parseFloat(viewport.dataset.scale || 1);
    let newScale = Math.max(1, Math.min(5, scale + delta)); // Limit between 1x and 5x

    // Reset position if back to 1x
    if (newScale === 1) {
        viewport.style.transform = `translate(0px, 0px) scale(1)`;
        viewport.dataset.x = 0;
        viewport.dataset.y = 0;
    } else {
        updateTransform(
            viewport,
            parseFloat(viewport.dataset.x || 0),
            parseFloat(viewport.dataset.y || 0),
            newScale
        );
    }
    viewport.dataset.scale = newScale;

    // Change cursor
    viewport.style.cursor = newScale > 1 ? 'grab' : 'default';
}

function updateTransform(el, x, y, scale) {
    el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    el.dataset.x = x;
    el.dataset.y = y;
}

// ============================================================
// PAN (DRAG) SYSTEM WITH BOUNDARIES
// ============================================================

function initDragEvent(viewport) {
    let isPanning = false, startX, startY, initialX, initialY;

    viewport.addEventListener('mousedown', (e) => {
        const scale = parseFloat(viewport.dataset.scale || 1);
        if (scale <= 1 || e.target.classList.contains('marker') || e.target.closest('.marker')) return;

        isPanning = true;
        viewport.classList.add('grabbing');
        startX = e.clientX;
        startY = e.clientY;
        initialX = parseFloat(viewport.dataset.x || 0);
        initialY = parseFloat(viewport.dataset.y || 0);
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        const scale = parseFloat(viewport.dataset.scale || 1);

        // Calculate delta
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        let proposedX = initialX + dx;
        let proposedY = initialY + dy;

        // Apply boundary constraints
        const wrapper = viewport.parentElement;
        const rect = wrapper.getBoundingClientRect();

        const w = rect.width;
        const h = rect.height;

        const minX = w * (1 - scale);
        const maxX = 0;
        const minY = h * (1 - scale);
        const maxY = 0;

        // Ensure image doesn't leave card bounds
        if (proposedX > maxX) proposedX = maxX;
        if (proposedX < minX) proposedX = minX;
        if (proposedY > maxY) proposedY = maxY;
        if (proposedY < minY) proposedY = minY;

        updateTransform(viewport, proposedX, proposedY, scale);
    });

    window.addEventListener('mouseup', () => {
        isPanning = false;
        viewport.classList.remove('grabbing');
    });

    // Handle mouse leave to prevent stuck drag
    viewport.addEventListener('mouseleave', () => {
        if (isPanning) {
            isPanning = false;
            viewport.classList.remove('grabbing');
        }
    });
}

// ============================================================
// MARKER SYSTEM (Annotations)
// ============================================================

function addMarker(btn) {
    const wrapper = btn.closest('.img-wrapper');
    const viewport = wrapper.querySelector('.img-viewport');

    const marker = document.createElement('div');
    marker.className = 'marker';
    marker.style.top = '50%';
    marker.style.left = '50%';
    marker.style.transform = 'translate(-50%, -50%)';

    // Add arrow icon
    const icon = document.createElement('span');
    icon.className = 'material-icons-round';
    icon.innerText = 'arrow_upward';
    marker.appendChild(icon);

    // Close button
    const close = document.createElement('div');
    close.className = 'marker-delete-btn';
    close.innerHTML = '×';
    close.onclick = (e) => {
        e.stopPropagation();
        marker.remove();
    };

    marker.appendChild(close);
    viewport.appendChild(marker);
    initMarkerDrag(marker);
}

function initMarkerDrag(marker) {
    marker.addEventListener('mousedown', (e) => {
        if (e.target.className.includes('delete')) return;
        e.stopPropagation(); // Don't drag background image

        const viewport = marker.parentElement;
        const scale = parseFloat(viewport.dataset.scale || 1);

        let startX = e.clientX, startY = e.clientY;
        let startLeft = marker.offsetLeft, startTop = marker.offsetTop;

        function onMove(e) {
            // Correct movement based on current zoom
            const dx = (e.clientX - startX) / scale;
            const dy = (e.clientY - startY) / scale;
            marker.style.left = (startLeft + dx) + 'px';
            marker.style.top = (startTop + dy) + 'px';
        }

        function onUp() {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        }

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    });
}

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    upgradeImagesToZoom();
});

// Also run on window load for late-loading images
window.addEventListener('load', () => {
    upgradeImagesToZoom();
});
