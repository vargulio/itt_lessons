let arr = [
    [1,2],
    [3,4,5]
];

// let arr2 = arr.slice();

// arr2[0][0] = 'Pesho';
// console.log(arr);
// console.log(arr2);

let copy = [];
for(let i=0; i<arr.length; i++) {
    let copyLine = [];
    for(let j =0; j< arr[i].length; j++) {
        copyLine.push(arr[i][j]);
    }
    copy.push(copyLine);
}


copy[0][0] = "Pesho";
console.log(arr);
console.log(copy);
