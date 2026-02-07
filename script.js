// ===== SCROLL REVEAL =====
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


// ===== SAFE COLOR THEMES (SAME VIBE) =====
const themes = [
  {
    bg: "#0f172a",
    card: "#111827",
    accent: "#22d3ee",
    soft: "#67e8f9"
  },
  {
    bg: "#020617",
    card: "#020617",
    accent: "#38bdf8",
    soft: "#7dd3fc"
  },
  {
    bg: "#020617",
    card: "#111827",
    accent: "#2dd4bf",
    soft: "#5eead4"
  }
];

let current = 0;

document.querySelector(".theme-btn").addEventListener("click", () => {
  current = (current + 1) % themes.length;
  const t = themes[current];

  document.documentElement.style.setProperty("--bg", t.bg);
  document.documentElement.style.setProperty("--card", t.card);
  document.documentElement.style.setProperty("--accent", t.accent);
  document.documentElement.style.setProperty("--accent-soft", t.soft);
});


// ===== SUBTLE GLOW PULSE (VERY SOFT) =====
setInterval(() => {
  document.querySelectorAll(".card").forEach(card => {
    card.style.boxShadow = `0 0 35px var(--accent-soft)`;
    setTimeout(() => {
      card.style.boxShadow = "0 0 0 transparent";
    }, 1200);
  });
}, 9000);
