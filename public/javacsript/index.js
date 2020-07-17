const api = new APIHandler;
document.addEventListener("DOMContentLoaded", main())


function main () {
    let call = api.fetchGame("games/1")
    console.log(call);
}

