const random1 = Math.floor(Math.random() * 6) + 1;
const random2 = Math.floor(Math.random() * 6) + 1;
const result = document.querySelector(".result");
onload = myfunc;
function myfunc1() {
    document.querySelector(".img1").src = "images/dice-image-" + random1 + ".png";
}
function myfunc2() {
    document.querySelector(".img2").src = "images/dice-image-" + random2 + ".png";
}
if (random1 > random2) {
    result.textContent += "Player 1 wins";
}
else if (random1 < random2) {
    result.textContent += "Player 2 wins";
}
else {
    result.textContent += "It's a draw";
}
function myfunc() {
    document.querySelector(".img1").src = "images/dice-image-" + random1 + ".png";
    document.querySelector(".img2").src = "images/dice-image-" + random2 + ".png";
} 