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
        .then(json => console.log(json));
    }

    getSplitObjectFromFetch(url) {
        this.fetchGame(url)
        .then(json => console.log(new Split(json.title)))
    }

    postData(url, data) {
        const response = fetch(`${this.url}/${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data) 
        })
        return response;
    }
}