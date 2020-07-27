const api = new APIHandler;
document.addEventListener("DOMContentLoaded", main())

function main () {
    listenForGameFormSubmit();
    buildGameIndexList();
}

//listens for post request for form. takes submit button of form in question
function listenForGameFormSubmit() {
    document.getElementById("game-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = event.target["game-form-name"].value;
        const category = event.target["game-form-category"].value;
        
        api.postData("games", new Game(name, category))
        .then(json => new Game(json.name, json.category).appendGameObject())

        removeGameList();
        removeForm("game-form");
        makeSplitForm();
    })
}

function buildGameIndexList() {
    api.fetchAllGames()
    .then(json => {
        if (json.length) {
            createGameListDiv();
            json.forEach(game => new Game(game.name, game.category).addGametoGameList())
        }
    })
}

function createGameListDiv() {
    let gameList = document.createElement("div");
    gameList.id = "game-list-div";

    const gameListTitle = document.createElement("h1");
    gameListTitle.id = "game-list-title";
    gameListTitle.innerHTML = "Recently Created Games";

    gameList.appendChild(gameListTitle);
    document.body.appendChild(gameList);
}

function removeGameList() {
    const gameListDiv = document.getElementById("game-list-div");
    
    if (gameListDiv) {
        gameListDiv.parentElement.removeChild(gameListDiv);
    }
}

function removeCurrentGame() {
    let currentGame = document.getElementById("game-div");
    currentGame.parentElement.removeChild(currentGame);
}

function removeForm(formID) {
    const gameForm = document.getElementById(formID);
    gameForm.remove();
}

function makeSplitForm() {
    // create div for splits
    const splitForm = document.createElement("form");
    splitForm.id = "split-form";

    const titleLabel = document.createElement("label");
    titleLabel.className = "split-form-labels";
    titleLabel.setAttribute("for", "split-title");
    titleLabel.innerHTML = "Split #1";

    const title = document.createElement("input");
    title.id = "split-title-1";
    title.className = "split-form-titles";
    title.type = "text";
    title.placeholder = "e.g. 'Boss #1'";

    const addSplit = document.createElement("button");
    addSplit.id = "add-split-btn";
    addSplit.type = "button";
    addSplit.textContent = "Add Another Split";

    const submit = document.createElement("button");
    submit.id = "submit-splits-btn"
    submit.type = "submit";
    submit.textContent = "Submit Splits";

    splitForm.appendChild(titleLabel);
    splitForm.appendChild(title);
    splitForm.appendChild(addSplit);
    splitForm.appendChild(submit);

    const splitDiv = document.getElementById("splits-div");
    splitDiv.appendChild(splitForm);

    handleNewSplitCreation();
    handleSplitsSubmission();
}

function handleNewSplitCreation() {
    let splitCounter = 1;
    document.getElementById("add-split-btn").addEventListener("click", () => {
        splitCounter += 1;
        const splitForm = document.getElementById("split-form");
        const addSplitBtn = document.getElementById("add-split-btn");

        const titleLabel = document.createElement("label");
        titleLabel.className = "split-form-labels"
        titleLabel.setAttribute("for", "split-title");
        titleLabel.innerHTML = `Split #${splitCounter}`;

        const title = document.createElement("input");
        title.id = `split-title-${splitCounter.toString(10)}`;
        title.className = "split-form-titles"
        title.type = "text";
        title.placeholder = `e.g. 'Boss #${splitCounter.toString(10)}'`;

        splitForm.insertBefore(title, addSplitBtn);
        splitForm.insertBefore(titleLabel, title);

    })
}

function handleSplitsSubmission() {
    document.getElementById("split-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const target = event.target;

        // create form data object to be sent to splits POST. Add game name to associate game to splits in POST action
        const formData = { "gameName": document.getElementById("game-name").innerHTML, "splits": {} };
        
        // iterate through form and gather all split title values
        // filters out button values that equal empty string
        for (let i = 0; i < target.length; i++) {
            if (target[i].value !== "") {
                formData["splits"][`split${i + 1}`] = target[i].value;
            }
        }

        // send split info from form data to splits create action
        api.postData("splits", formData)
        .then(json => json.splits.forEach(split => {
            new Split(split.title).appendSplit();
        }))

        removeForm("split-form");
    })
}










