document.addEventListener("DOMContentLoaded", main())
const api = new APIHandler;

function main () {
    listenForGameFormSubmit();
}

//listens for post request for form. takes submit button of form in question
function listenForGameFormSubmit() {
    document.getElementById("game-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = event.target["game-form-name"].value;
        const category = event.target["game-form-category"].value;
        
        api.postData("/games", new Game(name, category))
        .then(json => new Game(json.name, json.category, json.id).appendGameObject())

        removeGameForm();
        makeSplitForm();
    })
}

function removeCurrentGame() {
    let currentGame = document.getElementById("game-div");
    console.log(currentGame)
    currentGame.parentElement.removeChild(currentGame);
}

function removeGameForm() {
    const gameForm = document.getElementById("game-form");
    gameForm.remove();
}

function makeSplitForm() {
    // create div for splits
    const splitForm = document.createElement("form");
    splitForm.id = "split-form";

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "split-title");
    titleLabel.innerHTML = "Title:";

    const title = document.createElement("input");
    title.id = "split-title";
    title.type = "text";
    title.placeholder = "e.g. 'First Boss'";

    const submit = document.createElement("button");
    submit.id = "create-split-button"
    submit.type = "submit";
    submit.value = "Create split";

    splitForm.appendChild(titleLabel);
    splitForm.appendChild(title);
    splitForm.appendChild(submit);

    const splitDiv = document.getElementById("splits-div");
    splitDiv.appendChild(splitForm);

    handleSplitCreation();
}

function handleSplitCreation() {
    document.getElementById("split-form").addEventListener("submit", (event) => {
        event.preventDefault();
    })
}







