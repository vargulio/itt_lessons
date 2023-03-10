let dog = {
    name: "Sharo",
    bread: "Street fighter",
    isAGoodBoy: true,
    weight: 32,
    byte: function () {
        console.log(this.name + " is biting...");
    }
}

console.log(dog);

function Dog(name, bread, weight) {
    this.name = name;
    this.bread = bread;   
    this.isAGoodBoy = true;
    this.weight = weight;
    this.byte = function () {
        console.log(this.name + " is biting...");
    }
}
let glutnica = [
    {name: "Bobby", bread: "Husky", weight: 28},
    {name: "Rex", bread: "Labrador", weight: 28},
    {name: "Johny", bread: "Pincher", weight: 28},
    {name: "Momchil", bread: "Chihuahua", weight: 28},
    {name: "Mbappe", bread: "Buldog", weight: 28},
    {name: "Mr. Worldwide", bread: "Pitbul", weight: 28}
];

let dogsObjects = glutnica.map( 
    item => new Dog(item.name, item.bread, item.weight)
); 

let firstDog = dogsObjects[0];

console.log(firstDog);