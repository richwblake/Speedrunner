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
    
    appendGameObject() {
        const gameDiv = document.getElementById("game-div");
        const h1 = this.createH1ForName();
        gameDiv.insertBefore(h1, document.getElementById("splits-div"))
        return this;
    }
}

