function sum (a,b) {

    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Expected numbers but got something else!");
    }

    return a + b;

}


let result;
try {
   result = sum(5,"string");
} catch (e) {
    result = null;
    console.log("The sum function didn't run successfuly!");
}
console.log(result);