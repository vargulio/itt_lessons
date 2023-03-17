function parent () {

    nested();
    console.log("After nested");
}

function nested() {
    let a;
    try{ // then
        a = getSomethingFromTheServer();        

        // try {

        // } catch(e) {
            
        // }
    } catch(error) { // catch
        a = [];
        console.log(error);
    } finally {
        // code that doesn't depend on the success or faliure of our code. It is run ALWAYS!!!
    }
    

}

parent();


