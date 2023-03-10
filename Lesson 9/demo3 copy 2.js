let arr = [
    [1, 2], 
    [3, 4], 
    [5, 6], 
    [7, 8],
    9
];



arr.forEach(e => {
    e.forEach(nestetE => {
        console.log(nestetE);
    })
})