const api = new APIHandler;
document.addEventListener("DOMContentLoaded", main())


function main () {
    appendGameFromUrl("games/2");
}

function appendGameFromUrl(url) {
    makeGameObjectFromFetch(url);
}


function makeGameObjectFromFetch(url) {
    api.fetchGame(url)
    .then(json => appendGameObject(new Game(json.name, json.category)));
}

function appendGameObject(game) {
    const gameDivCard = game.createDivForGame;
    document.body.appendChild(gameDivCard);
}