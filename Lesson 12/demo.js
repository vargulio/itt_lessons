function bahur () {
    return "5";
}
let obj = {
    name: "Slavi",
    f: bahur
}

Object.defineProperty(obj, "newProp", {
    value: "Brand new prop",
    enumerable: false,
    writable: true,
    configurable: true
})

console.log(obj.newProp);



// console.log(bahur());
// console.log(obj.f());