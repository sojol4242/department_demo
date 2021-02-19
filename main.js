let x = 0;
let textEffect = "Electrical And Electronic Engineering"
const text = document.getElementById("effect")

function animateText() {
    if (x <= textEffect.length) {
        text.innerHTML += textEffect.charAt(x);
        x++;
    }
    setTimeout(animateText, 120);


}

animateText();