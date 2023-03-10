let list1 = [2,2,2,2,2];
let list2 = [3,3,3,3,3];
let list4 = [2];

let list3 = [...list4,'drugi stoinosti', ...list1,'bahur', ...list2];
let obj = {
    name: "Slavi",
    age: 30
}
console.log(...list3); // => transforms the list into multiple values -> list3[0], list3[1];
// we use the spread operator to convert a group (array or object) of variables into multiple variables

// console.log(...obj); // throws an error


function something(a,b,c) {
    console.log(a+b+c);
}

let list = [0,1,2,3];

something(...list);