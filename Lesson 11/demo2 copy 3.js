const pisi = {
    name: "Pisi",
    color: "White",
    age: 10,
    bred: "Ulichnica",
    pur: function () {
        console.log("Muurrrr");
    },
    kotarak: {
        name: "Gosho",
        color: "Black",
        age: 12
    }
};
// Utility functions
let propKeys = Object.keys(pisi); // [ 'name' ]
let propValues = Object.values(pisi); // [valueOfName]
let propEntries = Object.entries(pisi) // [ [<key>, <value>] ]
Object.freeze(pisi);


for(let kvotoPojelaem in pisi) {
    console.log(pisi[kvotoPojelaem]); //values
    console.log(kvotoPojelaem); // keys
}


pisi.name = "Misi";

delete pisi.name;
// console.log(Object.isFrozen(pisi));
// console.log(pisi);