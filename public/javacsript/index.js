const api = new APIHandler;
document.addEventListener("DOMContentLoaded", main())

function main () {
    setUpLandingPage();
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
    const btn = makeGameCreateButton();
    btn.addEventListener("click", () => makeGameForm())
}

function makeGameCreateButton() {
    const btn = document.createElement("button");
    btn.id = "create-game-btn";
    btn.innerHTML = "Create a Game";
    document.body.appendChild(btn);
    return btn;
}

function makeGameForm() {
    gameFormDiv = document.createElement("div");
    gameFormDiv.id = "game-form";

    gameFormTitle = document.createElement("h3");
    gameFormTitle.id = "game-form-title";
    gameFormTitle.innerHTML = "Create your game here"



    
    document.getElementById("create-game-btn").remove();
    document.body.appendChild(gameFormDiv);
    gameFormDiv.appendChild(gameFormTitle);
}






