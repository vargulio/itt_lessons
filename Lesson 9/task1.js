/**
     * Дадени са 3 зара за игра и играч, който ги хвърля последователно,
    неограничен брой пъти. Да се напише програма, която извежда на екрана
    броя хвърляния нужен на играча, за да хвърли три пъти подред, три
    шестици и да се прекрати изпълнението на програмата, когато това се
    случи.

    Примерен изход: “Отне 17 опита да хвърля 6 последователни зара с
    максимален брой!”
 */

let counsequitiveSixes = 0;
let totalCount = 0;

function throwDice() {
    return Math.ceil(Math.random()*6);
}

while(counsequitiveSixes !== 3){
    totalCount++;
    let zar1 = throwDice();
    let zar2 = throwDice();
    let zar3 = throwDice();

    if(zar1 + zar2 + zar3 === 18) {
        counsequitiveSixes++;
    } else {
        counsequitiveSixes = 0;
    }
}

console.log(`Отне ${totalCount} опита да хвърля 3 последователни зара с
максимален брой!`);