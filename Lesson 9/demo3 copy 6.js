let arr = ["101", "22", "3", "4", "95", "6", "7", "8"];

let result = arr.reduce(
    (accumulator = 0, currentValue) => {
        return accumulator + currentValue;
    },
    "0"
);
console.log(result);

/*
let arr = [101, 22, 3, 4, 95, 6, 7, 8];

let initialValue = 0;
let result = arr.reduce(
    (accumulator = 0, currentValue) => {
        return accumulator + currentValue;
    },
    initialValue
);
accumulator
console.log(result);

*/





