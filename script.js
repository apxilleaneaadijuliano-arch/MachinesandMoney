document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
    });

    card.addEventListener("mouseout", () => {
      card.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
    });
  });
});
