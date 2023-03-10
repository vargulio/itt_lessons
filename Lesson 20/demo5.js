let outside = "Bahur"
let result = (function() {
    let a = "In the parent function";
    function inner() {
        console.log(a, outside);
    }

    return inner;

})();

console.log(a);

result();