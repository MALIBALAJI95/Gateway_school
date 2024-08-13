// JavaScript for adding interactivity and animations

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonial slider (basic version)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const totalTestimonials = testimonials.length;

setInterval(() => {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    testimonials[currentTestimonial].classList.add('active');
}, 3000);


// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Display a success message (alert box)
    alert('Message sent successfully!');

    // Optionally, you can reset the form fields
    document.getElementById('contactForm').reset();
});
