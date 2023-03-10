//                 0 1 2 3 4 5
const gradeList = [3,6,4,5,6,2]; // length is 6
console.log("At the beginning: ", gradeList);

// add new element to the end of the list
gradeList[gradeList.length] = 3; // length is 7
console.log("After adding: ", gradeList);

gradeList.length = 6; // length is 6 again
console.log("In the end: ", gradeList);

gradeList.length = 50;
console.log(gradeList);

console.log(gradeList[48]);