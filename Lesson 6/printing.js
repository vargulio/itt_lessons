let arr = [
    [1,2],
    [3,4,5]
];

// printing the array
for(let i=0; i<arr.length;i++) {
    let edinString = "";

    for(let j=0; j<arr[i].length; j++) {
        edinString+=arr[i][j]+" ";
    }    
    console.log(edinString);
}

