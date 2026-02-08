// Function to navigate pages
function navigate(page) {
    window.location.href = page;
}

// Color-changing background
let colors = ["#FFDDC1", "#C1FFD7", "#C1D4FF", "#FFFAC1", "#FFC1E3"];
let index = 0;

function changeBackground() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}

// Change color every 3 seconds
setInterval(changeBackground, 3000);

