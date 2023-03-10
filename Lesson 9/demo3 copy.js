let arr = [1, 2, 3, 4, 5, 6, 7, 8];


// function <name> (<param>) {}
// () => {} arrow function

// arrow function
let c = (element) => {
    console.log(element);
}

//  arr.forEach(/*<call this action>*/)
arr.forEach( e => console.log(e));

// arr.forEach(      EQUIVALENT TO THE ARROW VERSION
//     function (element) {
//         console.log(element);
//     }
// );

/**
 * 
 * function forEach(cb) {
 *      
 *      for(let =0; i<length; i++) {
 *          cb(arr[i]);
 *      }
 * 
 * }
 * 
 */

