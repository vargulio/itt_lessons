

function fact(n) {
    if(n===1) { // base  case /дъно/ 
        return 1;
    }
    return n*fact(n-1); // рекурсивна стъпка
}

console.log(fact(5)); // 120