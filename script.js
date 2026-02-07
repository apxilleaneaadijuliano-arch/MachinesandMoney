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

// ===== COLOR THEMES =====
const themes = [
  { accent: "#22d3ee", soft: "#67e8f9" }, // cyan
  { accent: "#a78bfa", soft: "#c4b5fd" }, // purple
  { accent: "#facc15", soft: "#fde047" }, // gold
  { accent: "#34d399", soft: "#6ee7b7" }, // green
  { accent: "#fb7185", soft: "#fda4af" }  // pink
];

let index = 0;

function changeTheme() {
  document.documentElement.style.setProperty("--accent", themes[index].accent);
  document.documentElement.style.setProperty("--accent-soft", themes[index].soft);
  index = (index + 1) % themes.length;
}

// auto change
setInterval(changeTheme, 6000);

// manual button
document.querySelector(".theme-btn").addEventListener("click", changeTheme);

