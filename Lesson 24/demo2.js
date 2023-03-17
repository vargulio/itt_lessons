function something() {
    let a;
    try {
        // console.log('trying...');
        a = 5;
        a.push(); /// this throws an error
        console.log('Neshto') // this will not run
        // return 1; // this will also not run
    } catch(e) {
        console.log(e.message);
        console.log('oops, I failed...');
      
    } finally {
        // console.log('finally...');
        // console.log(a);
    }

    console.log("after the whole affair.");
}

console.log(something());