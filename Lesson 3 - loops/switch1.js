// input - number 1-12 - > number of the days in the month

let month = Math.ceil(Math.random()*12);
console.log("Month: ", month);

switch (month) {
    case 1: 
    case 3: 
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:   
        console.log(31);
        break;  

    case 2: 
        console.log(28);
        break;
    default:
        console.log(30);
        break;
}
