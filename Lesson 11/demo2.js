let pisi = {
    name: "Pisi",
    color: "White",
    age: 10,
    bred: "Ulichnica",
    pur: function () {
        console.log("Muurrrr");
    }
};

let kotarak = {
    name: "Gosho",
    color: "Black",
    age: 12
};

pisi.partner = kotarak;
kotarak.partner = pisi;

console.log(pisi.partner.partner.partner);