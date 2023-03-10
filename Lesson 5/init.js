// don't do this
let gradeList = new Array(2,3,4,5);

console.log(gradeList);

// bad practice
gradeList[-1] = "Pesho";

// don't do this at home or at work
console.log(gradeList[-1]);

// typeof doesn't work
console.log(typeof gradeList);
console.log(typeof null);

// the proper way to check if a variable is Array
console.log(Array.isArray(gradeList));


