let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Bahur");
    }, 500)
});

promise
    .then(data => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.5) {
                    reject("Bahur 1");
                } else {
                    resolve("Bahur 1 success");
                }
            }, 500)
        });
    })
    .then(data => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Bahur 2");
            }, 500)
        });
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("Finished!");
    });
    

