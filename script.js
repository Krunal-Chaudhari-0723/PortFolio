// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hamburger = document.querySelector('.hamburger');
    const cross = document.querySelector('.cross');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('.main');
    
    // Function to check if we're on mobile
    function isMobile() {
        return window.innerWidth <= 600;
    }
    
    // Initialize sidebar state based on screen size
    function initSidebar() {
        if (isMobile()) {
            // On mobile, sidebar starts hidden
            sidebar.classList.remove('sidebarVisible');
        } else {
            // On desktop, sidebar is always visible
            sidebar.classList.remove('sidebarGo');
        }
    }
    
    // Toggle sidebar on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            sidebar.classList.toggle('sidebarVisible');
        });
    }
    
    // Hide sidebar on cross click
    if (cross) {
        cross.addEventListener('click', function() {
            sidebar.classList.remove('sidebarVisible');
        });
    }
    
    // Handle window resize events
    window.addEventListener('resize', function() {
        initSidebar();
    });
    
    // Initialize sidebar on page load
    initSidebar();
});