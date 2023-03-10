myFunction(); // why this is working???

// console.log(x); bad practice 

let x = "Slavi";

function myFunction() { // function declaration
    let x = "Vargulev";
    console.log("Novoto za vas");
}

console.log("Tuk:", b);

var b = function myFunction1() { // function expression
    let x = "Vargulev";
    console.log("Novoto za vas");
}

console.log(myFunction && myFunction());


