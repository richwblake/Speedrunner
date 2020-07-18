class APIHandler {
    constructor () {
        this.url = "http://localhost:3000"
    }

    fetchGame(url) {
        return fetch(`${this.url}/${url}`)
        .then(response => response.json())
    }

    makeGameObjectFromFetch(url) {
        this.fetchGame(url)
        .then(json => new Game(json.name, json.category).appendGameObject());
    }
}