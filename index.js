// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

/* Increase Function */
increaseBtn.onclick = function () {
    count++;

    countLabel.textContent = count;
};

/* Decrease Function */
decreaseBtn.onclick = function () {
    if (count == 0) {
        countLabel.textContent = count;
    } else {
        count--;
        countLabel.textContent = count;
    }
};

/* Reset Function */
resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count === 0 ? 0 : count;
};

const d = new Date();
document.getElementById("year").textContent = d.getFullYear();
