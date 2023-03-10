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

pisi.zodia = "Scorpion";


// Property descriptors
Object.defineProperties(pisi, "zodia", {
    // this here is metadata. Data for the data. 
    value: "Scorpion",
    writable: true, // can we change the value
    enumerable: false, // would we see it when iterating through the properties
    configurable: false // can we change these settings 
});



console.log(pisi);
pisi.zodia = "Strelec";
delete pisi.zodia;
console.log(pisi.zodia);
