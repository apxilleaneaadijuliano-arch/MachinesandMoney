// Smooth scrolling between sections
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').includes('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Animated color-changing effect for headers
const headers = document.querySelectorAll('h1, h2');
setInterval(() => {
  headers.forEach(h => {
    h.style.color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 40%)`;
  });
}, 3000);
