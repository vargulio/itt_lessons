let array = ["Pesho", "Gosho", "Stanka"];


// adding an element at the end
array.push("Nikolay","Dimityr","Sasho","edin string");

// for(let i =0; i< array.length; i++) {
//     console.log(typeof array[i]);
// }

// adding an element at the beginning
array.unshift("string");


// removing an element from the end
array.pop("neshto v skobite");

// removing an element from the begining
array.shift();

// copying an array
// start is inclusive
// end is exclusive
let newArray = array.slice(1,4);


console.log(array);
let deletedItems = array.splice(1,3,"Na Gosho zamestnik", "Na Stanka zamestnik");

console.log(array);
console.log(deletedItems);

