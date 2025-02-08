// Responsive Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });

        // Close menu on mobile after clicking
        navMenu.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let errorMessage = document.getElementById('error-message');

    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = "All fields are required!";
        errorMessage.style.color = "red";
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email!";
        errorMessage.style.color = "red";
        return;
    }

    errorMessage.textContent = "Message sent successfully!";
    errorMessage.style.color = "green";

    // Clear the form
    document.getElementById('contact-form').reset();
});

// Function to Validate Email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Back to Top Button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
