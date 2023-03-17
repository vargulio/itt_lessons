// function requestLoan() {

//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let data = localStorage.get('something');
//             resolve(data);


//         }, 1000*60);
//     })

// }

// requestLoan().then(data => {
//     console.log(data);
// })
function something () {
    console.log("I will run");
    let a = 5;
    a.push();

    console.log("Basi gadnata greshka!");

}


// we can create our own errors as they are just objects
const error = new Error("Input data is invalid");
throw error;

something();


