document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 12px 28px rgba(0,0,0,0.3)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.18)";
  });
});
