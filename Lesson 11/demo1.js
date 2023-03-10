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
        
    },
    name: "Slavozar",
    5: "Pet sys dumi" // bad practice
};

let property = "name";

// this syntax [] we use only when we don't know what's the property
console.log("TUKA",docObj[property]); // identical to the row below
console.log("TUKA",docObj["name"]);


console.log(docObj);

docObj.cars = ["Lada", "Peugeot", "Audi"];

docObj.name = "Slavozar";

console.log(docObj);

let name = "Slavozar";




let patientName = "Nikola";
let patientSymptoms = [
    "liver faliure", 
    "finantial problems",
    "headache"
];

