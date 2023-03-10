function Dog(name, bread, weight) {
    this.name = name;
    this.bread = bread;   
    this.isAGoodBoy = true;
    this.weight = weight;
}

console.log("before: ", Dog.prototype);



console.log("after: ", Dog.prototype);


let dog1 = new Dog("Sharo","Labrador", 43);
let dog2 = new Dog("Rex", "German Sheppard", 44);

Dog.prototype.byte = function () {
    console.log(this.name + " is biting...");
}

dog1.byte();

dog1.eat();

console.log(dog1.__proto__ === Dog.prototype); // true

console.log(dog2.__proto__); // the prototype (Dog.prototype)
console.log(dog2.__proto__.__proto__); // Object
console.log(dog2.__proto__.__proto__.__proto__); // null

