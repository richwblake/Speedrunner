document.addEventListener("DOMContentLoaded", main())
const api = new APIHandler;

function main () {
    listenForGameFormSubmit();
}

//listens for post request for form. takes submit button of form in question
function listenForGameFormSubmit(form) {
    document.getElementById("game-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = event.target["game-form-name"].value;
        const category = event.target["game-form-category"].value;
        
        api.postData("/games", new Game(name, category))
        .then(data => data.json())
        .then(json => new Game(json.name, json.category, json.id).appendGameObject())


        removeGameForm();
    })
}

function removeCurrentGame() {
    let currentGame = document.getElementById("game-div");
    console.log(currentGame)
    currentGame.parentElement.removeChild(currentGame);
}

function removeGameForm() {
    const gameForm = document.getElementById("game-form");
    const gameFormDiv = gameForm.parentElement;

    gameForm.remove();
    gameFormDiv.remove();
    makeSplitForm();
}

function makeSplitForm() {
    // create div for splits
    console.log("split form called")
    const splitFormDiv = document.createElement("div");
    splitFormDiv.id = "split-form-div";
    
    const gameDiv = document.getElementById("game-div");
    gameDiv.appendChild(splitFormDiv);
}







