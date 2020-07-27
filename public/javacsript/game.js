class Game {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    createH1ForName(idForGame) {
        let h1 = document.createElement("h1");
        h1.id = idForGame;
        h1.innerHTML = this.name;
        return h1;
    }
    
    appendGameObject() {
        const gameDiv = document.getElementById("game-div");
        const h1 = this.createH1ForName("game-name");
        gameDiv.insertBefore(h1, document.getElementById("splits-div"))
        return this;
    }

    addGametoGameList() {
        const gameListDiv = document.getElementById("game-list-div");
        const h1 = this.createH1ForName("game-list-name");
        gameListDiv.appendChild(h1);
    }
}

