/**
 * Task5. Write a program that reads a 
 * positive number and writes its binary representation. 
 * */

// delim chisloto na 2 s ostatuk
// ostatuka go zapazvame v krainiq rezultat V NACHALOTO
// delim chisloto na 2 bez ostatuk - prostoDelene
// repeat until prostoDelene ne e ravno na 0

let number = 123;
let result = "";


while(number >= 1) {
    result = number % 2 + result;
    number = Math.floor(number / 2);
} 

console.log(result);

