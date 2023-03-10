let arr = [1, 2, 3, 4, 5, 6, 7, 8];


//  arr.map(/*<call this action>*/)
// arr.map results in a new array
// with elements as the result from the callback
let result = arr.map(
    function (element) {
        return element + 2;
    }
);



console.log(result);
console.log(arr);



/**
 * 
 * function map(cb) {
 *      
 *      let arr = [];
 *      
 *      for(let =0; i<originalArray.length; i++) {
 *          arr.push(cb());
 *      }
 * 
 *      return arr;
 * 
 * }
 * 
 */

