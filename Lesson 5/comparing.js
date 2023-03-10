let array1 = [2,3];
let array2 = [2,3,4];

// this doesn't work it only comares the references(address in the memory) 
// console.log(array1==array2);


let areEqual = true;

if(array1.length !== array2.length ) {
    areEqual = false;

} else {

    for(let i = 0; i<array1.length; i++) {
        if(array1[i]!==array2[i]) {
            areEqual = false;
            break;
        }
    }
}

areEqual ? console.log("Ravni sa") : console.log("Ne sa ravni");