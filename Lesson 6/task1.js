/**
 *  Напишете програма, която проверява дали в масив 
 *  от цели числа всички числа са неотрицателни.
 */

let arr = [2,1,2,4,5,6];

// Shte proverim vsqko chislo
// ako e + ili 0 -> produljavame natatuk
// ako e - -> spirame izpylnenieto 

let isPositive = true;

for(let i=0; i<arr.length; i++) {
    if(arr[i] < 0 ) {
        isPositive = false;
        break;
    }
}

console.log(isPositive);

