let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Bahur");
    }, 2000);
});


let promise1 = promise
    .then(data => {
        // console.log(data);
        console.log(promise !== promise1);
        return data;
    });


let promise2 = promise1
    .then(res => {
        console.log(promise1);
        // console.log("From second then", res);
    });

promise2.then(result => {
    console.log(promise2);
    // console.log(result);
})