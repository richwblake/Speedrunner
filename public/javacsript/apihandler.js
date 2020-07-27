class APIHandler {
    constructor () {
        this.url = "http://localhost:3000"
    }

    fetchGame(url) {
        return fetch(`${this.url}/${url}`)
        .then(response => response.json())
    }

    fetchAllGames() {
        return fetch(`${this.url}/games`)
        .then(response => response.json())
    }

    postData(url, data) {
        return fetch(`${this.url}/${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data) 
        })
        .then(response => response.json())
    }
}