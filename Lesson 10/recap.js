/**
 * 
 * 
 * 
 Niki D. - V X X X 
 Maria - X X V
 Nikola - V V X
 Dian - V V X X
 Gabi - X V V V
 Anjelo - X V X V V
 Stanko - X X X
 Andrei - V X V X V
 Pavel - V V X
 Tina - X X V X
 Lucho - X X X v
 Milen - V V X X
 Rumi - X X X X 
 Evgeni - V X X X
 Kosta - X X X X
 Alex - V V X
 Tako - V V V X V
 Sasho I - V X V V V
 Georgi - X X X V
 Gergana - V X X X
 Yanica  - X V V X
 Teo - V X X X 
 Ivo - V X X X 
 Marto - X X V X
 Stoyan - V X X X
 Sasho D. - V X X V X

 let arr = [1,2,3,4,5,6,7];

 // [2,3,4,5,6,7,8] - TEO
 // [2,4,6]- IVO
 // [7,6,5,4,3,2,1] - STOYAN
 // SUM - Sasho D. 









 function sum(a,b) {

    a+b;

 }

const result = sum(5,3);









 console.log(undefined == false);





let arr = [1,2,3];


arr.splice(0,3);

console.log(arr);

 let copy = arr.slice();


 arr[0] = "Bahur";

 console.log(arr);
 console.log(copy);







 for(let i=0; i<100; i++) {
    console.log(i);
 }



 let arr = [1,2,3];

 arr[0] = arr;

 console.log(arr);







 




 function fact(n) {

    if(n == 1) {
        return 1;
    }
    return n*fact(n+1);
 }

 console.log(fact(5));




 

let c = !!"bahur"; 

console.log(typeof c);



const text = "Maika mu!";

text = text.split("mu").join(" ");





 a();

 let a = function bahur() {

    console.log("Maika mu!");
 }
///-------------------------------
 a();

 var a = function bahur() {

    console.log("Maika mu!");
 }









 let a = 0;
 let b = [];



 console.log(++a && !!"false" && b);

















 function (a,b,c) {
   

    return "bahur".toUpperCase();
 }



 function a() {

    function b() {
        console.log(c);
    }
    var c = "Maika mu";

    return function() {
        return b;
    }
 }

 console.log(a()()());















function bahur(a,b,c) {
    return function(a,b,c,d) {
        return a+b+c+d;
    }
}

let result = bahur(1,2,3,4);










console.log(result);

function a() {

    let smth = "neshto";

    function b() {
        console.log(smth);
    }

    b();

}

console.log(a);









let arr = "[1,2,3,4]";

arr.length = 10;

console.log(arr);









let text = "recap is not that fun";







for(let i=0; i>=0; i++) {
    console.log(i);
    let b = "bahur";
    console.log(b);


}


let a = [];
let b = 0;
let c = function () {

}

console.log(a || b || c);






function a() {
    b();
}

function b() {
    a();
}

a();








 function something() {
    var b = "Slavi";

    return function inner() {
        console.log(b);
    }

 }

 let result = something();
 console.log(result());
 */