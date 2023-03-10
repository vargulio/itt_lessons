let maximum = Math.max(1,2,3,4,4,5,6,67,78,7,8,52,52352,1,0);


function max() {
    var bahur;
    let currentMax = arguments[0];
    for(let i=1; i<arguments.length; i++) {
        if(arguments[i] > currentMax) {
            bahur = "Bahur";
            currentMax = arguments[i];
        }
    }
    console.log(bahur);
    return currentMax;
}
// console.log(bahur);
console.log(max(1,2,14,26,62,1,121,0));