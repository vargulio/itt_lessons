let masiv = [1,2,3];

function erraseArray(arr) { // let arr; 
    // neshto pravim
    arr = []; // brand new address in memory
    // masiv = [];

    return console.log("Print: ", arr);
}

erraseArray(masiv); // arr = masiv 

console.log(masiv);
