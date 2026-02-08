// Animated color-changing headers
const headers = document.querySelectorAll('h1, h2');
setInterval(() => {
  headers.forEach(h => {
    h.style.color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
  });
}, 2500);

// Glow effect for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.boxShadow = "0 0 20px #fff";
  });
  link.addEventListener('mouseout', () => {
    link.style.boxShadow = "none";
  });
});

// Smooth scroll for internal anchors (future-proof if you add #sections)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
