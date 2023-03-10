// based on the input number  1-7 print the weekday

let input = Math.ceil(Math.random()*7);
console.log("Input: " + input);

if (input === 1) {
    console.log("Monday");
} else if(input === 2) {
    console.log("Tuesday");
} else if(input === 3) {
    console.log("Wednesday");
} else if(input === 4) {
    console.log("Thursday");
} else if(input === 5) {
    console.log("Friday");
} else if(input === 6) {
    console.log("Saturday");
} else if(input === 7) {
    console.log("Sunday");
} else {
    console.log("Invalid input")
}