/**
 * Едномерен масив наричаме назъбен, ако всеки елемент в
масива е > от предишния и < от следващия. Напишете
програма, която проверява дали даден масив от числа е
назъбен.
 */

// shte proverim za proizvolna troika sysedni elementi
// te sa podredeni vyv vyzhodqsht ili nizhodq6t red
// ako ima takava troika => masivat ne e nazyben

let arr = [2,1,6,5,8,6,10,4];

let edinFlag = true; // dali masivAt e nazyben

for(let i=1; i<arr.length -1; i++) {

    const isDecending = arr[i]>= arr[i+1] && arr[i] <= arr[i-1];
    const isAcending = arr[i]>=arr[i-1] && arr[i] <= arr[i+1];

    if(isDecending || isAcending ) {
        
        edinFlag = false;
        break;       

    } 
}

console.log(edinFlag ? "MasivAt e nazyben" : "MasivAt ne e nazyben");



