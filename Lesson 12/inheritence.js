function Vehicle(make, model, topSpeed) { // prototype = {}
    this.make = make;
    this.model = model;
    this.topSpeed = topSpeed;
    this.accelarate = function () {
        console.log(this.make + " is accelarating...");
    }
}

function Car(make, model, topSpeed) { // prototype = {}
    Vehicle.call(this, make, model, topSpeed); // Constructor stealing... (shady)
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Bike(make, model, topSpeed) { // prototype = {}
    Vehicle.call(this, make, model, topSpeed); // Constructor stealing... (shady)
}

let car = new Car("Audi", "A3", 200);
let bike = new Bike("Yamaha", "R1", "много");

console.log(car);
console.log(bike);



