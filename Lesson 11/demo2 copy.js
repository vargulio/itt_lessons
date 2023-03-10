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

pisi.kotarak.partner = pisi;


console.log(pisi);