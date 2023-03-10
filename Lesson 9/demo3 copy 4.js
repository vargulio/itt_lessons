let arr = [1, 2, 3, 4, 5, 6, 7, 8];


//  arr.filter(/*<call this action>*/)
// arr.filter results in a new array with all elements that pass the check
let result = arr.filter(
    function (element) {

        let isRetrogradenMerkurii = Math.random() > 0.5;
        return isRetrogradenMerkurii ?  element > 4 : false; // THE CHECK
    }
);



console.log(result);
console.log(arr);



/**
 * 
 * function filter(cb) {
 *      
 *      let arr = [];
 *      
 *      for(let =0; i<originalArray.length; i++) {
 *          if(cb()) {
 *              arr.push(originalArray[i]);
 *          }           
 *      }
 * 
 *      return arr;
 * 
 * }
 * 
 */

