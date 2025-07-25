// Scroll animation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Random page-turn animations
const directions = ['left', 'right', 'up', 'down'];
function randomDirection() {
  return directions[Math.floor(Math.random() * directions.length)];
}

document.querySelectorAll('.page-section').forEach(section => {
  section.addEventListener('mouseenter', () => {
    const dir = randomDirection();
    section.classList.remove('turn-left', 'turn-right', 'turn-up', 'turn-down');
    section.classList.add(`turn-${dir}`);
  });
});

// Neon button ripple effect
document.querySelectorAll('.neon-btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  });
});
