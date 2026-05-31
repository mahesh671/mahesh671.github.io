// Typewriter effect
const phrases = [
  'GenAI Engineer',
  'Autonomous Agent Builder',
  'LLM Systems Designer',
  'AI-First Backend Developer',
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
const el = document.getElementById('typewriter');

function type() {
  const current = phrases[phraseIndex];
  if (deleting) {
    el.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
  } else {
    el.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(type, 1600);
      return;
    }
  }
  setTimeout(type, deleting ? 50 : 80);
}
type();

// Nav scroll shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.stat-card, .skill-group, .project-card, .focus-item, .contact-card, .about-text, .tech-tag, .timeline-item, .edu-card, .cert-card'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
