let b = "Vargulev";

function something() {

    let b = "Slavi";


    // lexical env depends on where the function is declared
    return function somethingElse() { 

        let b = "Gosho";
        console.log(b);
    }

}


var c = something();

something()();
c(); // it doesn't matter that we call c (which is somethingElse undercover)
// from the global scope. 


