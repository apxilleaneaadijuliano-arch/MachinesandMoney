const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition =
        "opacity 0.9s ease-out, transform 0.9s ease-out";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 40px rgba(124,255,155,0.35)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
