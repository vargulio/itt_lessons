/**
 * Напишете програма, която за даден масив от символи arr и
символ ch, въведен от потребителя, проверява али arr съдържа
ch. Ако се съдържа, отпечатайте индекса на елемента. Ако не,
отпечатайте подходящо избрана от вас стойност.
 */

let arr = ["*","a",".","@","b","%"];

let ch = "a";
let index = -1;

for(let i =0; i<arr.length; i++) {
    if(arr[i] === ch) {
        index = i;
        break;
    }
}

console.log(index === -1 ? 
                "Nqma go" : 
                `Na eto tazi poziciq e: ${index}`
            );