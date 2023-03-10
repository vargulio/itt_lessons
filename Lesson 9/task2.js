/**
 *  
 *  Да се напише програма, която преобразува текст от следния вид:
    “Today is Friday and its very hot” в текст от вида “today-is-friday-and”.
    Програмата работи по следното правило: Ако във входния текст
    най-дългата дума има повече от 6 символа, резултатът се ограничава до
    максимум 3 думи, а в противен случай максималният брой думи е 4.
 */


let input = "Today is Friday and its very hot";


let arr = input
    .toLowerCase()
    .split(" ");
    
let isThereLongWord = false;

for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if(word.length > 6) {
        isThereLongWord = true;
        break;
    }
}

if(isThereLongWord) {
    arr.length = 3;
} else {
    arr.length = 4;
}
console.log(arr.join("-"));

