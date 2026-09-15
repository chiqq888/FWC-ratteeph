const balloon = document.getElementById("balloon");

let size = 200;

const colors = ["red", "green", "blue"];
let colorIndex = 0;

balloon.addEventListener("click", function () {
    size = size + 10;

    if (size > 420) {
        size = 200;
    }

    colorIndex = colorIndex + 1;

    if (colorIndex > 2) {
        colorIndex = 0;
    }

    updateBalloon();
});

balloon.addEventListener("mouseleave", function () {
    
    if (size > 200) {
        size = size - 5;
    }

    colorIndex = colorIndex - 1;

    if (colorIndex < 0) {
        colorIndex = 2;
    }

    updateBalloon();
});

function updateBalloon() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
}