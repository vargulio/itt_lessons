// "use strict" -> in strict this is undefined 

function teach (param) {
    //    "this" is always reference to an object
    // "this" is also refered to as "context"
    //  gives us the ability for dynamic context
    this.age++;
    console.log( this.name + " bere qdove");
    console.log("Params: ", param);
}

let person = {
    name: "Slavi",
    age: 31,
    teaching: teach
}

let person1 = {
    name: "Ivan",
    age: 23
}

// returns a copy of the function with modified this and DOES NOT CALL IT
//  copyOfTheFunction = <functionReference>.bind(<thisArgumend>) 
let action = person.teaching.bind(person1);

// <functionReference>.call(<thisArgument>, param1, param2,...)
// <functionReference>.apply(<thisArgument>, [param1, param2])

// call and apply borrow the function and call it immediately 
// person.teaching.call(person, "bahur");
// teach.apply(person1, ["bahur"]);
// console.log(person);
action();
action();
action();

