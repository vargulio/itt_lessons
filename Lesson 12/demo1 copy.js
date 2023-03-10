// "use strict" -> in strict this is undefined 

function teach () {
    //    "this" is always reference to an object
    // "this" is also refered to as "context"
    //  gives us the ability for dynamic context
    console.log( this.name + " bere qdove");
}

let person = {
    name: "Slavi",
    age: 31,
    teaching: teach
}

let person1 = {
    name: "Ivan",
    age: 23,
    teaching: function () {
        console.log(" I am: " + this.name + " na " + this.age);
    }
}

teach();

// person.teaching = person1.teaching;

// person.teaching();

