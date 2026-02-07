// ===== SCROLL REVEAL =====
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// ===== PROJECTOR-SAFE COLOR THEMES =====
const themes = [
  { accent: "#1b5e20", card: "#ffffff", bg: "#f4f4f4" },
  { accent: "#0d47a1", card: "#ffffff", bg: "#e8f0fe" },
  { accent: "#8d6e00", card: "#ffffff", bg: "#fff8e1" }
];

let index = 0;

document.querySelector(".theme-btn").addEventListener("click", () => {
  index = (index + 1) % themes.length;
  const theme = themes[index];
  document.documentElement.style.setProperty("--accent", theme.accent);
  document.documentElement.style.setProperty("--card", theme.card);
  document.body.style.backgroundColor = theme.bg;
  document.querySelector("header").style.backgroundColor = theme.accent;
  document.querySelector(".theme-btn").style.backgroundColor = theme.accent;
  document.querySelectorAll(".card").forEach(card => card.style.borderColor = theme.accent);
});


