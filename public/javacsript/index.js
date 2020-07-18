const api = new APIHandler;
document.addEventListener("DOMContentLoaded", main())

function main () {
    setUpLandingPage();
}

// call this function with a get request url to append a game in db to the DOM
function setUpGameView(url) {
    api.makeGameObjectFromFetch(url);
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






