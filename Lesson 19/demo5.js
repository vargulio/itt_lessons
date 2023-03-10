// function Animal(name, age) {
//     this.name = name;
//     this.age = age;
//     this.eat = function () {
//         return this.name + ' is eating';
//     }
// }

// function Cat(name, age) {

//     Animal.bind(this, [name, age]);

//     this.isOld = age >= 20;
// }

// let connan = new Cat("Connan", 18);

// console.log(connan.name);
let num = 5;
console.log(num instanceof Object);
