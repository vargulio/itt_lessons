// console.log("Hi");
// -------------
// console.log("Hi");
// &&&&&&&&&&&&
// ??????????

//             parameters
function greet(fullName) { // let fullName;
    console.log("Hi, " + fullName); 
}

let human = "Slavi";
//arguments calling the function
const result = greet(human);
console.log(result);

function sum(a,b) {
    return a+b; // the expression after return takes the place
                // of the function call

    // console.log("Bahur"); Unreachable code
 }

const c = sum(5,3); // a + b

console.log(c);

