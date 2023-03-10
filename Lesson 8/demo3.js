let a = function something(a,b,c) { // c is a callback
    return c(a) + c(b);
}

function somethingElse(param) {
   return param.length;
}

function svurshihaMiImenata() {

}

console.log(
    something(
        "Slavozar", 
        "Vargulev", 
        function(param) { console.log(param) } // anonymous function
    )
);

