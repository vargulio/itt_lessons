function sum(a,b) {
    // b = b || 0; // a way to implement default parameter

    if(typeof a !== "number" || typeof b !== "number") {
        console.log("Ne se byzikai, bastun!");
        return null;
    }         
    return a+b; 
    
}

const c = sum(5, "Vargulev"); // a + b

console.log(c);

