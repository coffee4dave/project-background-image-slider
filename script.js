const right = document.querySelector("#btn-right");
const left = document.querySelector("#btn-left");
const img = document.querySelector("#img-container");
const images = [
    "amy-shamblen-koYklSUjAXc-unsplash.jpg",
    "catrin-johnson-ym96FAhQ8o4-unsplash.jpg",
    "charles-deluvio-y6TY0wEnWqU-unsplash.jpg",
    "dose-juice-Zvha13RXnZY-unsplash.jpg",
    "hessam-hojati-bTU2mFrDyTU-unsplash.jpg"
];
let index = 0;

window.addEventListener("load", () => {
    img.style.backgroundImage = "url('images/" + images[index] + "')";
});

right.addEventListener("click", () => {
    increaseIndex();
    img.style.backgroundImage = "url('images/" + images[index] + "')";
});

left.addEventListener("click", () => {
    decreaseIndex();
    img.style.backgroundImage = "url('images/" + images[index] + "')";
});

function increaseIndex() {
    index++;
    index = (index >= images.length) ? 0 : index;
}

function decreaseIndex() {
    index--;
    index = (index < 0) ? (images.length - 1) : index;
}