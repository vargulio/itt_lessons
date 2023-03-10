/**
 * Task8. Modify task 8 to print a triangle that 
 * is hollow and has only a frame of stars. 
 * */

// height is known
// width is height * 2 - 1
// in order to print the left side the corelation is - height - row + 1 -> column
// in order to print the right side the corelation is - height + row - 1 -> column
// if row === height -> print * the whole way

let height = 5;
const width = height * 2 -1;    
let triangle = "";

for(let row = 1; row <=height; row++) {
    
    for(let column = 1; column <= width; column++) {

        if(
            column === height - row + 1 || 
            column === height + row - 1 || 
            row === height 
        ) {
            triangle+=" *";
        } else {
            triangle+="  ";
        }

    }
    triangle+="\n";
}
console.log(triangle);