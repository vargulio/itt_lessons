let docName = "Slavi";
let docAge = 31;
let docSex = "male";
let docSpecialty = "GP";

let doc = ["Slavi", 31, "male","GP"];

/**
 * let <objName> = {
 *     <propertyName>: <propertyValue>,
 *     <property1Name>: <property1Value>

 * }
 * 
 */

// object literal
let docObj = {
    // called properties
    name: "Slavi", // doesn't define a variable called 'name' 
    age: 31,
    sex: "male",
    givePrescription: function (symptoms) {
        return console.log("Ei ti, begai do aptekata");
    },
    name: "Slavozar",
    5: "Pet sys dumi" // bad practice
};

docObj.cars = ["Lada", "Peugeot", "Audi"];

console.log(docObj);

// docObj.cars = null; // set the value of the prop to null

let areThereCars = "cars" in docObj; // returns true/false

console.log(areThereCars);

// keyword  <obj>.<propertyName>
// delete docObj.cars;

areThereCars = "cars" in docObj;
console.log(areThereCars);


for(let i = 0; i< docObj.cars.length; i++) {
    console.log(docObj.cars[i]);
}

docObj.map(i => console.log(i));



