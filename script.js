const right = document.querySelector("#btn-right");
const left = document.querySelector("#btn-left");
const img = document.querySelector("#img-container");
// const images = [
//     "amy-shamblen-koYklSUjAXc-unsplash.jpg",
//     "catrin-johnson-ym96FAhQ8o4-unsplash.jpg",
//     "charles-deluvio-y6TY0wEnWqU-unsplash.jpg",
//     "dose-juice-Zvha13RXnZY-unsplash.jpg",
//     "hessam-hojati-bTU2mFrDyTU-unsplash.jpg"
// ];
let images = [];
let index = 0;
init();

window.addEventListener("load", () => {

    img.style.backgroundImage = getImage();
});

right.addEventListener("click", () => {
    increaseIndex();
    img.style.backgroundImage = getImage();
});

left.addEventListener("click", () => {
    decreaseIndex();
    img.style.backgroundImage = getImage();
});

function getImage() {
    return "url('" + images[index] + "')";
}

function increaseIndex() {
    index++;
    index = (index >= images.length) ? 0 : index;
}

function decreaseIndex() {
    index--;
    index = (index < 0) ? (images.length - 1) : index;
}

// =======================================================
function init() {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://api.unsplash.com/photos/?client_id=UG-YxcUndp6I6lLO3o-OO-IsYkX7KjcpvHHkxQcQxFs', true)

    request.onload = function() {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data.forEach((movie) => {
                console.log(movie.links.download)
                images.push(movie.links.download);
            })
        } else {
            console.log('error')
        }
    }

    // Send request
    request.send();
}
//how to connect to an api
//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

// env variables
// https: //www.robertcooper.me/front-end-javascript-environment-variables