// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '0';
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  } else {
    navbar.style.padding = '0';
    navbar.style.boxShadow = 'none';
  }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  navToggle.classList.toggle('toggle-active');
});

// Smooth scroll active link highlight
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.style.color = '';
    if (item.getAttribute('href') === '#' + current) {
      item.style.color = 'var(--accent)';
    }
  });
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply reveal to elements
document.querySelectorAll('.stat-card, .skill-category, .project-card, .timeline-item, .contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Hero name typing effect on load
const heroName = document.querySelector('.hero-name');
const originalText = heroName.textContent;
heroName.textContent = '';

let i = 0;
const typeWriter = () => {
  if (i < originalText.length) {
    heroName.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
};

setTimeout(typeWriter, 500);

// Add CSS for mobile nav active state
const style = document.createElement('style');
style.textContent = `
  .nav-active {
    display: flex !important;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--surface);
    padding: 1rem 2rem;
    gap: 1rem;
    border-bottom: 1px solid var(--border);
  }
  .toggle-active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  .toggle-active span:nth-child(2) {
    opacity: 0;
  }
  .toggle-active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
`;
document.head.appendChild(style);
