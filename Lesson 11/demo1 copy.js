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

let funcProp = "givePrescription";

console.log(docObj[funcProp]());

let property = "name";





docObj.cars = ["Lada", "Peugeot", "Audi"];

docObj.name = "Slavozar";


let name = "Slavozar";




let patientName = "Nikola";
let patientSymptoms = [
    "liver faliure", 
    "finantial problems",
    "headache"
];

