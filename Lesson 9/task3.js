/**
     * Даден е масив от цели числа. Да се намери кои елементи са повече
    - четни или нечетни и да се изведе в конзолата - “Четните числа са
    повече” или “Нечетните числа са повече”, в зависимост от намерения
    резултат. Използвайте рекурсия!
 */

let arr = [2,3,3,2,4,"Bahur"];

let odd = 0;
let even = 0;

function kaktoIskash(i,arr) {

    if(i === arr.length) {
        return;
    }

    if(typeof arr[i] === 'number' && arr[i] % 2 === 0) {
        even++;
    } else if(typeof arr[i] === 'number') {
        odd++;
    }

    return kaktoIskash(i+1,arr);

}

kaktoIskash(0,arr);

if(odd > even) {
    console.log("Nechetnite sa poveche");
} else if(odd === even) {
    console.log("Znachi sa ravni");
} else {
    console.log("Chetnite sa poveche");
}