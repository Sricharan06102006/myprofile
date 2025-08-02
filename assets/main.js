// Scrollspy
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = section.getAttribute('id');
    }

    // Section fade-in on scroll
    if (top + window.innerHeight >= section.offsetTop + 100) {
      section.classList.add('visible');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Floating contact toggle
document.getElementById('contact-btn').addEventListener('click', () => {
  const popup = document.getElementById('contact-popup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});

// Animate circular skills
window.addEventListener('load', () => {
  document.querySelectorAll('.circle').forEach(el => {
    const percent = el.getAttribute('data-percent');
    const circle = el.querySelector('circle');
    const offset = 251 - (251 * percent) / 100;
    circle.style.setProperty('--offset', offset);
  });
});
