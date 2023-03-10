let field = [
    [' ',' ',' ','x',' ','x',' ',' ',' ' ],
    [' ',' ',' ','x',' ','x',' ',' ',' ' ],
    [' ',' ',' ','x',' ','x','x',' ',' ' ],
    ['x','x','x','x',' ','x',' ','x',' ' ],
    [' ',' ',' ',' ',' ','x','x','x','x' ],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ' ],
    ['x','x','x','x','x','x','x','x','x' ],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ' ]
];


function bomb(x,y,arr) {
    if( !(x<0 ||
        x>=arr.length ||
        y < 0 ||
        y>=arr[x].length) ) 
    {
        const copy = JSON.parse(JSON.stringify(arr));
        copy[x][y] = "$";
        console.table(copy);
    }
    

    if(
        x<0 ||
        x>=arr.length ||
        y < 0 ||
        y>=arr[x].length ||
        arr[x][y] === 'x' || 
        arr[x][y] === '@'       
    ) {
        return;
    } 

    arr[x][y] = '@';
    bomb(x+1,y,arr); // down
    bomb(x-1,y,arr); // up
    bomb(x,y+1,arr); // right
    bomb(x, y-1,arr);// left

}

bomb(3,6, field);

console.table(field);