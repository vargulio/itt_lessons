/*
 * Task7. Write a program that reads a number and prints 
 * a triangle of stars with the height of
 * the number. 
*/

let height = 5;

for(let j=1; j<=height;j++) {
    let row = "";
    let stars = j*2 - 1;
    let spaces = (height * 2 - 1 - stars) / 2; 
    for(let i = spaces; i>0; i-- ) {
        row+= " ";
    }
    for(let z = 1; z <= stars; z++) {
        row+= "*";
    }
    console.log(row);
}

