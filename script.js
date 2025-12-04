// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle contact form submission - SEND TO WHATSAPP
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const date = contactForm.querySelector('input[type="date"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email || !phone || !date) {
        alert('Please fill in all required fields!');
        return;
    }
    
    // Create WhatsApp message
    const whatsappMessage = `🍽️ *New Restaurant Booking Request*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
📅 *Reservation Date:* ${date}
💬 *Special Requests:* ${message || 'None'}

---
_Sent from Richard Dine Website_`;
    
    // Your WhatsApp number (Indian format: 919031287182)
    const whatsappNumber = '919031287182';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    alert('✅ Redirecting to WhatsApp! Please send the message to confirm your booking.');
    
    // Reset form
    contactForm.reset();
});

// Add scroll effect to navigation
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(26, 26, 26, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = '#1a1a1a';
        nav.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll for menu items
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe menu items for animation
document.querySelectorAll('.menu-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});

// Add fade-in animation for about section
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    observer.observe(aboutSection);
}

// Add current year to footer
const updateFooterYear = () => {
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = `© ${new Date().getFullYear()} Richard Dine. All rights reserved.`;
    }
};

// Run on page load
updateFooterYear();

// Prevent form submission on enter key in input fields (except textarea)
document.querySelectorAll('.contact-form input').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});

// Add floating animation to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Mobile menu animation
hamburger.addEventListener('click', function() {
    const spans = this.querySelectorAll('span');
    
    if (navMenu.classList.contains('active')) {
        // Animate to X
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        // Animate back to hamburger
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll to top button (optional - you can add this)
let scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #d4af37;
    color: #1a1a1a;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    z-index: 999;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
    } else {
        scrollTopBtn.style.opacity = '0';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Console message (optional - fun easter egg)
console.log('%c🍽️ Richard Dine - Fine Dining Experience', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cWebsite by Your Name', 'color: #666; font-size: 12px;');
