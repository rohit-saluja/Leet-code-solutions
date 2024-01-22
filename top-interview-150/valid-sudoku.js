/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i=0; i<9; i++){
        const row = new Set()
        const col  = new Set()
        const box = new Set()
        for(let j=0; j<9; j++){
            const rowValue = board[i][j]
            const colValue = board[j][i]
            const boxValue = board[3*Math.floor(i/3) + Math.floor(j/3)][3*(i%3) + (j%3)]
            if(rowValue!=='.'){
                if(row.has(rowValue)) return false
                row.add(rowValue)
            }
            if(colValue!=='.'){
                if(col.has(colValue)) return false
                col.add(colValue)
            }
            if(boxValue!=='.'){
                if(box.has(boxValue)) return false
                box.add(boxValue)
            }
            console.log(row,col,box);
        }
    }
    return true
};
