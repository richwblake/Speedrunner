class APIHandler {
    constructor () {
        this.url = "http://localhost:3000"
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

    fetchGame(gameName) {
        return fetch(`${this.url}/games/${gameName}`)
        .then(response => {
            if (!response.ok) {
                throw(Error)
            }
            else {
                return response.json()
            }
        })
    }
} 