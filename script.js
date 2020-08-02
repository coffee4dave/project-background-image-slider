const right = document.querySelector("#btn-right");
const left = document.querySelector("#btn-left");
const img = document.querySelector("#img-container");
const attr = document.querySelector("#attr");
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

    // img.style.backgroundImage = getImage();
});

right.addEventListener("click", () => {
    increaseIndex();
    img.style.backgroundImage = getImage();
    attr.innerHTML = `Photo by <a href = "https://unsplash.com/@${images[index].username}?utm_source=demo&utm_medium=referral"> ${images[index].user} </a> on <a href="https://unsplash.com/?utm_source=demo&utm_medium=referral ">Unsplash</a>`;
});

left.addEventListener("click", () => {
    decreaseIndex();
    img.style.backgroundImage = getImage();
    attr.innerHTML = `Photo by <a href = "https://unsplash.com/@${images[index].username}?utm_source=demo&utm_medium=referral"> ${images[index].user} </a> on <a href="https://unsplash.com/?utm_source=demo&utm_medium=referral ">Unsplash</a>`;
});

function getImage() {
    return "url('" + images[index].url + "')";
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
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.unsplash.com/search/photos/?query=yellow&per_page=25utm_source=demo&utm_medium=referral ', true);
    request.setRequestHeader('Authorization', 'Client-ID UG-YxcUndp6I6lLO3o-OO-IsYkX7KjcpvHHkxQcQxFs');
    // Open a new connection, using the GET request on the URL endpoint
    // request.open('GET', 'https://api.unsplash.com/photos/?client_id=UG-YxcUndp6I6lLO3o-OO-IsYkX7KjcpvHHkxQcQxFs', true)


    request.onload = function() {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response);
        console.log(data);
        if (request.status >= 200 && request.status < 400) {
            data.results.forEach((pics) => {
                let image = new Object();
                image.user = pics.user.name;
                image.username = pics.user.username;
                image.url = pics.urls.regular;
                images.push(image);
                // images.push(pics.urls.regular);
            })
        } else {
            console.log('error');
            console.log(data.errors);
        }
    }

    // Send request
    request.send();

    request.addEventListener('loadend', () => {
        img.style.backgroundImage = getImage();
        attr.innerHTML = `Photo by <a href = "https://unsplash.com/@${images[index].username}?utm_source=demo&utm_medium=referral"> ${images[index].user} </a> on <a href="https://unsplash.com/?utm_source=demo&utm_medium=referral ">Unsplash</a>`;
    });
}
//how to connect to an api
//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

// env variables
// https: //www.robertcooper.me/front-end-javascript-environment-variables