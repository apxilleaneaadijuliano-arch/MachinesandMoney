// SCROLL REVEAL
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

// COLOR THEMES
const themes = [
  { bg1: "#22c1c3", bg2: "#fdbb2d" },
  { bg1: "#f2709c", bg2: "#ff9472" },
  { bg1: "#6a11cb", bg2: "#2575fc" },
  { bg1: "#11998e", bg2: "#38ef7d" },
  { bg1: "#fc5c7d", bg2: "#6a82fb" }
];

let themeIndex = 0;
function changeTheme(){
  themeIndex = (themeIndex + 1) % themes.length;
  const theme = themes[themeIndex];
  document.body.style.background = `linear-gradient(135deg, ${theme.bg1}, ${theme.bg2})`;
  document.querySelector(".theme-btn").style.background = theme.bg1;
}
setInterval(changeTheme, 5000);
document.querySelector(".theme-btn").addEventListener("click", changeTheme);

// INTERACTIVE EXPAND BUTTONS
document.querySelectorAll(".expand-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.nextElementSibling;
    text.style.display = text.style.display === "block" ? "none" : "block";
  });
});
