const api = new APIHandler;
document.addEventListener("DOMContentLoaded", main())

function main () {
    setUpLandingPage();
    api.postGameData(new Game({name: "COD", category: "Shooter"}))
    .then(data => data.json())
    .then(json => console.log(json))
}

// call this function with a get request url to append a game in db to the DOM
function setUpGameView(url) {
    api.getGameObjectFromFetch(url);
}

function removeCurrentGame() {
    let currentGame = document.getElementById("game-div");
    console.log(currentGame)
    currentGame.parentElement.removeChild(currentGame);
}

function setUpLandingPage() {
    makeGameCreateButton();
}

function makeGameCreateButton() {
    let btn = document.createElement("button");
    btn.id = "create-game-btn";
    btn.innerHTML = "Create a Game";
    document.body.appendChild(btn);
}






