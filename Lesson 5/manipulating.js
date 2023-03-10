// how to put a new element in the beginning of the array

// let array = [1,2,3];

// array[0] = "Neshto si";

// let newArray = ["Neshto si"];

// for(let i=1; i<=array.length; i++) {
//     newArray[i] = array[i-1];
// }

// array = newArray;
// console.log(newArray);

let array = [1,2,3];


// for(let i = array.length; i>0; i--) {    
//     array[i] = array[i-1];
// }
// array[0] = "Neshto si";

// console.log(array);

for(let i =0; i<array.length - 1; i++) {
    array[i] = array[i+1];
}
array.length--;

console.log(array);

