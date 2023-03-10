let isThereAnswer = Math.random() > 0.5;

while (isThereAnswer === false) {
    console.log('Ringing...');
    isThereAnswer = Math.random() > 0.5;
}
console.log('Ало! Кой е!?');