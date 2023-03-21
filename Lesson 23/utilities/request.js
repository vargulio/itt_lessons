function request(url, options) {
    return fetch(url, options)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject("Something went wrong");
        }
    })
}