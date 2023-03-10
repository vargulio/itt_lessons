/**Task3. Write a program that prints all numbers from A to B 
 * that can be divided by 3. A and B - from
* operator from console. Numbers must be in ascending order 
*/


// range between A and B
// for each number between A and B check if it's devidable by 3
// repeat


let a = 10;
let b = 1;

let min = a > b ? b : a;
let max = a > b ? a : b;


for(let i = min; i<=max; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}
