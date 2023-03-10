/**Дадена е матрица 9 Х 9 клетки. Да се провери дали матрицата е
коректно попълнено Судоку. 

3 1 6 5 7 8 4 9 2 
5 2 9 1 3 4 7 6 8 
4 8 7 6 2 9 5 3 1 
2 6 3 4 1 5 9 8 7 
9 7 4 8 6 3 1 2 5 
8 5 1 7 9 2 6 4 3 
1 3 8 9 4 7 2 5 6 
6 9 2 3 5 1 8 7 4 
7 4 5 2 8 6 3 1 9
*/

let grid = [ 
    [ 2, 1, 6, 5, 7, 8, 4, 9, 3 ],
    [ 5, 2, 9, 1, 3, 4, 7, 6, 8 ],
    [ 4, 8, 7, 6, 2, 9, 5, 3, 1 ],
    [ 2, 6, 3, 4, 1, 5, 9, 8, 7 ],
    [ 9, 7, 4, 8, 6, 3, 1, 2, 5 ],
    [ 8, 5, 1, 7, 9, 2, 6, 4, 3 ],
    [ 1, 3, 8, 9, 4, 7, 2, 5, 6 ],
    [ 6, 9, 2, 3, 5, 1, 8, 7, 4 ],
    [ 7, 4, 5, 2, 8, 6, 3, 1, 9 ] 
];

let isSudoku = true;

for (let row = 0; row < grid.length; row++) {
    let sumRow = 0;
    let sumCol = 0;
    for (let col = 0; col < grid[row].length; col++) {
        sumRow+=grid[row][col];
        sumCol+=grid[col][row];
    }
    if(sumRow !== 45 || sumCol !==45) {
        isSudoku = false;
        break;
    }
}


for(let row = 0; row<grid.length; row+=3) {
    for(let col = 0; col<grid[row].length; col+=3) {
        if(!checkSmallMatrix(grid, row,col)) {
            isSudoku = false;
            break;
        }
    }
    if(!isSudoku) {
        break;
    }

}

console.log("Tuk: ", isSudoku);


function checkSmallMatrix(bigMatrix, startX, startY) {
    let sum = 0;
    for(let i = startX; i < startX + 3; i++ ) {
        for(let j = startY; j < startY + 3; j++ ) {
            sum+=bigMatrix[i][j]; 
        }
    }
    return sum === 45;
}


