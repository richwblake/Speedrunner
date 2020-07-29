class Game {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    createElementForName(idForGame, elementType) {
        let h1 = document.createElement(elementType);
        h1.id = idForGame;
        h1.innerHTML = this.name;
        return h1;
    }
    
    appendGameObject() {
        const gameDiv = document.getElementById("game-div");
        const h1 = this.createElementForName("game-name", "h1");
        gameDiv.insertBefore(h1, document.getElementById("splits-div"))
        return this;
    }

    addGametoGameList() {
        const gameListDiv = document.getElementById("game-list-div");
        const h2 = this.createElementForName(`game-name-${this.name}`, "h2");
        gameListDiv.appendChild(h2);
    }
}

 