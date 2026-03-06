'use strict';

// Get references to the sidebar and overlay elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.side-bar');
const overlay = document.getElementById('sidebar-overlay');
const body = document.body;

// Function to toggle the sidebar and overlay
function toggleSidebar() {
    body.classList.toggle('sidebar-open');
    // No need to toggle class on sidebar anymore -  CSS handles it via body
}

// Event listener for the hamburger menu
hamburger.addEventListener('click', toggleSidebar);

// Event listener for the overlay to close the sidebar when clicked
overlay.addEventListener('click', toggleSidebar);

// Close on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains(sidebar-open)) {
        toggleSidebar();
    }
})

// Optional: close when clicking menu links on mobile
document.querySelectorAll('.side-bar a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerwidth < 600) { 
            toggleSidebar();
        }
    });
});