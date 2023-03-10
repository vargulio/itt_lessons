/**
 * Напишете програма, която за дадена матрица m x n 
 * от числа намира реда, в който сумата от елементите 
 * е максимална.
 */

let matrica = [
    
    [-1,-2,-7,-8],  //-18
    [-1,-2,-3,-4], //-10
];

let row = 0;
let maxSum = 0;

for(let j=0; j<matrica.length; j++) {
    let currentSum = 0;
    for(let i=0; i<matrica[j].length; i++) {
        currentSum+= matrica[j][i];
    }

    if(currentSum > maxSum || j===0) {
        maxSum = currentSum;
        row = j + 1;
    }
}

console.log(maxSum);
console.log(row);










for(let j=0; j<matrica.length; j++) {
    let sum = 0;

    for(let i=0; i<matrica[j].length; i++) {
        sum+=matrica[j][i];
    }
}



