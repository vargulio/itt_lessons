/**
 * Task6. 
 * Write a program that reads a short positive number 
 * and tells how many bits are 1 in it.
 * */

// delim chisloto na 2 s ostatuk
// ostatuka go zapazvame v krainiq rezultat V NACHALOTO
// delim chisloto na 2 bez ostatuk - prostoDelene
// repeat until prostoDelene ne e ravno na 0

let number = 120;
let counter = 0;


while(number >= 1) {
    if(number % 2 === 1) {
        counter++;
    };
    number = Math.floor(number / 2);
} 

console.log(counter);

