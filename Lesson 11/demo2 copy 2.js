let pisi = {
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

let propKeys = Object.keys(pisi); // [ 'name' ]
let propValues = Object.values(pisi); // [valueOfName]
let propEntries = Object.entries(pisi) // [ [<key>, <value>] ]
console.log(propEntries);

// propKeys.map(function(pitarPan) {
//     console.log(pisi[pitarPan]);
// });
