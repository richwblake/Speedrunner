class APIHandler {
    constructor () {
        this.url = "http://localhost:3000"
    }

    fetchGame(url) {
        return fetch(`${this.url}/${url}`)
        .then(response => response.json())
    }

    getGameObjectFromFetch(url) {
        this.fetchGame(url)
        .then(json => new Game(json.name, json.category).appendGameObject());
    }

    postGameData(game) {
        const response = fetch(`${this.url}/games`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(game) 
        })
        return response;
    }
}