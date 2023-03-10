let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Bahur");
    }, 2000)
});


promise
    .then(data => {
        console.log(data);
        return data;
    })
    .then(res => {
        console.log("From second then", res);
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })