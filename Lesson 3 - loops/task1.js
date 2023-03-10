// print the numbers from 0 -99
// skip numbers between 20 and 50 inclusive

let isRetrogradenMerkurii = Math.random() > 0.7;

for(let i=0; i<100; i++) {
    if(i>=20 && i<=50) { // same as !(i<20 || i>50)
        continue; // skips an iteration
    }

    if(isRetrogradenMerkurii) {
        break; // terminates the loop
    }
    console.log(i);
}
