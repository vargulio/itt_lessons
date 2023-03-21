class UserManager {

    loggedUser = null;

    constructor() {
        this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    }

    register = (username, password) => {
        return makeAPICall(SERVER_URL + '/users', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
    }


    login = (username, password) => {
        return makeAPICall(SERVER_URL + '/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(({hasVoted, sessionId, username}) => {
            localStorage.setItem('loggedUser', JSON.stringify({hasVoted, sessionId, username}));
        })
    }


}