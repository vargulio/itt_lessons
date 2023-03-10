let arr = [5,2,31];

/*
 Find the sum of all elements

    1. arr[0] + sumOfAllElements(1)
    2.          arr[1] + sumOfAllElements(2)
    3.                   arr[2] + sumOfAllElems(3)
*/

//                            default params
function sumOfAllElements(arr, i = 0) {
    // i = i || 0; // default params the old school way
    if(i === arr.length -1) {
        return arr[i];
    }
    console.log(i);
    return arr[i] + sumOfAllElements(arr, ++i);
}

console.log(sumOfAllElements(arr));

