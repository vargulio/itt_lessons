let userName = ""; // falsy value

// explicit type conversion
let hereIsABoolean = Boolean(userName); 
let hereIsANumber = Number(userName);
let hereIsAString = String(5);

let badPractice = "5";
console.log(+badPractice);

// converting into boolean
console.log(!!"");


console.log("Tuk: ", hereIsAString);
console.log(typeof hereIsAString);

if(userName) {
    console.log("Daa bee, obyrkal si se!");
} else {
    console.log("Ei, vavedi neshto be");
}


let someText = "   pch20elniKoshera";
let five = "23";
console.log("ParseInt: ", parseInt(five, 2));