function teach () {
    //    "this" is always reference to an object
    // "this" is also refered to as "context"
    //  gives us the ability for dynamic context
    console.log( this.name + " bere qdove");
}




let person = {
    // name: "Slavi",
    age: 31,
    teaching: teach
}

let person1 = {
    name: "Ivan",
    age: 23,
    teaching: teach
}
console.log(this);

// this is not author-time determined, it is call-time determined
// what do we have on the left side of the function call
person.teaching();
person1.teaching();
teach();
