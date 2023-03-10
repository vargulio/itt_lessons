let a = 5;
let b = 6;

let arr = [5,6];

function swap(c,d) {
    a // -> will be a from outside
    arr = [1,2,3];
}

swap(arr);

console.log(arr);
