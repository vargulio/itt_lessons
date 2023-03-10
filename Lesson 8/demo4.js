function wizeOne(whatDoYouWantToDo) {
    switch(whatDoYouWantToDo){
        case "get rich":
            return function() {
                console.log("Work your ass off");
            }
        case "get poor":
            return function() {
                console.log("Find a golddigger");
            }
        case "become happy": 
            return function() {
                console.log("drink rakiq");
            }
    }

}

const result = wizeOne("get rich");
/**const result = function() {
                console.log("Work your ass off");
                }*/
console.log(result());