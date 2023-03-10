/*
Write a program that prints all odd numbers .
between 0 and 50 and all even numbers
between 51 and 100. 
*/

// start 0 end 100
// 0 - 50 - print all the nechetni
// 51 - 100 - print all chetni

for(let i =0; i<=100; i++){

    if(i<=50 && i%2 === 1) { 
        // i is less than 51
        // i is less than 51 and is nechetno
        console.log(i + "is nechetno");
    } else if(i%2===0 && i>50) {
        console.log(i + "is chetno");
    }
    
}