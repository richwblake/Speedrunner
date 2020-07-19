const api = new APIHandler;
document.addEventListener("DOMContentLoaded", main())

function main () {
    setUpLandingPage();
    api.getSplitObjectFromFetch("splits/1")
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

function removeGameForm() {
    const gameForm = document.getElementById("game-form");
    const gameFormDiv = gameForm.parentElement;

    gameForm.remove();
    gameFormDiv.remove();
}

function setUpLandingPage() {
    const btn = makeGameCreateButton();
    btn.addEventListener("click", () => makeGameForm())
}

function makeGameCreateButton() {
    const btn = document.createElement("button");
    btn.className = "new-game-btn";
    btn.id = "new-game-btn"
    btn.innerHTML = "Create a Game";
    document.body.appendChild(btn);
    return btn;
}

function makeGameForm() {
    //create game form div
    const gameFormDiv = document.createElement("div");
    gameFormDiv.id = "game-form-div";

    //create title for game form
    const gameFormTitle = document.createElement("h2");
    gameFormTitle.id = "game-form-title";
    gameFormTitle.className = "game-form"
    gameFormTitle.innerHTML = "&#x2193 Create your game here &#x2193"

    //create game form
    const gameForm = document.createElement("form");
    gameForm.id = "game-form";
    gameForm.className = "game-form";

    //create game title field and label
    const nameField = document.createElement("textarea");
    nameField.placeholder = "e.g. 'Bloodborne'"
    nameField.id = "game-form-name";
    nameField.className = "game-form-input"

    const nameLabelField = document.createElement("label");
    nameLabelField.id = "game-form-label";
    nameLabelField.setAttribute("for", "game-form-name");
    nameLabelField.innerHTML = "Name: "

    //create game category field and label
    const categoryField = document.createElement("textarea");
    categoryField.placeholder = "e.g. 'Spooky'"
    categoryField.id = "game-form-category";
    categoryField.className = "game-form-input";

    const categoryLabelField = document.createElement("label");
    categoryLabelField.id = "category-form-label";
    categoryLabelField.setAttribute("for", "game-form-category");
    categoryLabelField.innerHTML = "Category: "

    const submitBtn = document.createElement("button");
    submitBtn.className = "new-game-btn";
    submitBtn.innerHTML = "Create Game"
    
    //remove landing page button
    document.getElementById("new-game-btn").remove();

    //append div to body and form to div. append form input elements to form
    document.body.appendChild(gameFormDiv);
    gameFormDiv.appendChild(gameFormTitle);
    gameFormDiv.appendChild(gameForm);
    gameForm.appendChild(nameLabelField);
    gameForm.appendChild(nameField);
    gameForm.appendChild(categoryLabelField)
    gameForm.appendChild(categoryField);
    gameForm.appendChild(submitBtn);

    listenForGameFormSubmit(gameForm);
}

//listens for post request for form. takes submit button of form in question
function listenForGameFormSubmit(form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = event.target["game-form-name"].value;
        const category = event.target["game-form-category"].value;
        game = new Game(name, category);
        
        api.postData("/games", game)
        .then(game.appendGameObject())


        removeGameForm();
    })
}








