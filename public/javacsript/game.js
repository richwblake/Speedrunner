class Game {
    constructor(name, category, id = undefined) {
        this.id = id;
        this.name = name;
        this.category = category;
    }

    createH1ForName() {
        let h1 = document.createElement("h1");
        h1.id = "game-name"
        h1.innerHTML = this.name;
        return h1;
    }

    createDivForGame() {
        let gameCard = document.createElement("div");
        gameCard.id = "game-div";

        const gameh1 = this.createH1ForName();
        gameCard.appendChild(gameh1);

        return gameCard;
    }
    
    appendGameObject() {
        console.log("called")
        const gameDiv = document.getElementById("game-div");
        const h1 = this.createH1ForName();
        gameDiv.appendChild(h1);
        return this;
    }
}

