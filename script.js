// Color-changing background
const colors = ["#FFDDC1", "#C1FFD7", "#C1D4FF", "#FFFAC1", "#FFC1E3"];
let index = 0;

function changeBackground() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}

// Change color every 2.5 seconds
setInterval(changeBackground, 2500);
