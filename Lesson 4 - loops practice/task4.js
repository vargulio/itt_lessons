/**
 * Task4. Write a program that tells 
 * you if a number is prime.//prosto chislo
 */


// chisloto trqbva da se deli SAMO na 1 i na sebe si
// zapochvash da delish chisloto ot 1 do samoto chislo
// ako chisloto se deli uvelichavam counter
// ako counter <= 2;

let num = 144;
// let counterche = 0;
let isPrime = true;

for (let i = 2; i<=num; i++) {
    if(num % i === 0 && i !== num) {
        isPrime = false;
        break;
    }
}

// if(counterche <= 2) {
//     console.log("The number is prime!");
// } else {
//     console.log("The number is not prime!");
// }

console.log(`Is the number prime: ${isPrime}`);