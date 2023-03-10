let global = 'Bahur';
// IIFE - immediately invoked function expression
(function something(param) {
    console.log("Izpylnqvam slojna logika");
    var b = "Slavi";
    console.log(param);
    console.log(global); // taken from the parent scope
})("pisi");




