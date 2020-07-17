document.addEventListener("DOMContentLoaded", main())


function main () {
    const api = new APIHandler;
    api.fetchGame("games/1")
    .then(json => makeGameObjectFromJSON(json))
}



function makeGameObjectFromJSON(json) {
    const game = new Game(json.name, json.category);
    console.log(game)
}

function createGameDiv(game) {
    
}