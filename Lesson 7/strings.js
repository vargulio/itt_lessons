
//          01234
let text = "Slavi";

console.log(text.length);

text.length = 3; // can't be changed unlike with arrays
console.log(text.length);

console.log(text[3]); // I don't reccomend this 
console.log(text.charAt(3));

text[0] = "P";

console.log(text);
//             01234567   
const text1 = "seno, seni, seno, igla, igla seno";

console.log("INDEX: ", text1.indexOf("igla", 19));

let userName = "slavozar vargulev";
// userName = userName.trim()
console.log(userName);

const symbols = userName.split("");

console.log(symbols);