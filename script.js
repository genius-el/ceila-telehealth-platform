`use strict`;

// Function to toggle the visibility of the sidebar
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.side-bar');
const overlay = document.getElementById('sidebar-overlay');
const body = document.body;

hamburger.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
})

function toggleSidebar() {
    const isOpen = sidebar.style.display === 'block';

    if (isOpen) {
        // Close
        sidebar.style.display = 'none';
        body.classList.remove('sidebar-open');
    } else {
        // Open
        sidebar.style.display = 'block';
        body.classList.add('sidebar-open');
    }
}

// Toggle on hamburger click
hamburger.addEventListener('click', toggleSidebar);

// Close when clicking overlay
overlay.addEventListener('click', toggleSidebar);

// Optional: Close on Escape key (good for accessibility)
document.assEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.style.display === 'block') {
        toggleSidebar();
    }
});