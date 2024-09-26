function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the popup is visible, if so, prevent clicking on navbar links
        if (document.querySelector('.popup-new').style.display === 'flex') {
            e.preventDefault(); // Disable scrolling
        } else {
            // Allow normal behavior if the popup is not visible
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Function to hide the popup and show the landing page
function showLandingPage() {
    document.querySelector('.popup-new').style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling when popup is hidden
}

// Show popup on page load
window.onload = function () {
    // Show the popup when the page loads
    document.querySelector('.popup-new').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scrolling when the popup is shown

    // Handle form submission
    document.getElementById('registration-form').onsubmit = function (event) {
        event.preventDefault(); // Prevent the default form submission
        showLandingPage();
    };
};
// Function to hide the popup and show the landing page
function showLandingPage() {
    document.querySelector('.popup-new').style.display = 'none';
    document.body.classList.remove('popup-active'); // Remove class when popup is hidden
}

// Show popup on page load
window.onload = function () {
    // Show the popup when the page loads
    document.querySelector('.popup-new').style.display = 'flex';
    document.body.classList.add('popup-active'); // Add class to fix the screen for small devices

    // Handle form submission
    document.getElementById('registration-form').onsubmit = function (event) {
        event.preventDefault(); // Prevent the default form submission
        showLandingPage();
    };
};