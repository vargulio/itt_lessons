function Cat(name, age) {
    Animal.call(this, name, age);
}


function Animal(name, age) {
    this.name = name;
    this.age = age;    
}


Animal.prototype.makeNoise = function() {
    return this.name + ' is making noise';
}


let pisi = new Cat('Конан', 20);
console.log(pisi.makeNoise());

class A  {
    constructor(a,b) {
        this.a = a;
    }
}

class B extends A {



    constructor(a,b,c,d) {
        console.log()
        super(a,b);
    }
}




