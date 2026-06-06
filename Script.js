// Cursor-following gradient orbs
const glow = document.getElementById('glow');
const o1   = document.getElementById('o1');
const o2   = document.getElementById('o2');
const o3   = document.getElementById('o3');

document.addEventListener('mousemove', function(e) {
  // Move the glow to cursor position
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';

  // Calculate relative position (0 to 1)
  const mx = e.clientX / window.innerWidth;
  const my = e.clientY / window.innerHeight;

  // Shift each orb gently in different directions
  o1.style.transform = 'translate(' + (mx * 35) + 'px, ' + (my * 25) + 'px)';
  o2.style.transform = 'translate(' + (-mx * 30) + 'px, ' + (-my * 25) + 'px)';
  o3.style.transform = 'translate(' + ((mx - 0.5) * 50) + 'px, ' + ((my - 0.5) * 40) + 'px)';
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  let current = '';

  sections.forEach(function(section) {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
