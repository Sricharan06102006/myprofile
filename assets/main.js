const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

// ScrollSpy for nav
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Contact popup toggle
const contactBtn = document.getElementById('contact-btn');
const contactPopup = document.getElementById('contact-popup');
contactBtn.addEventListener('click', () => {
  contactPopup.style.display = contactPopup.style.display === 'block' ? 'none' : 'block';
});

// Skill circle animation
window.addEventListener('load', () => {
  document.querySelectorAll('.circle').forEach(el => {
    const percent = el.getAttribute('data-percent');
    const circle = el.querySelector('circle');
    const offset = 251 - (251 * percent) / 100;
    circle.style.strokeDasharray = 251;
    circle.style.strokeDashoffset = offset;
  });
});

