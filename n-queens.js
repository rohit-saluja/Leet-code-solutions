/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = []
    const board = Array(n).fill(0).map((value=>Array(n).fill('.')))
    const isValid = (row,col)=>{
        for(let i=0; i<row; i++){
            if(board[i][col] === 'Q') return false
        }
        for(let i=row-1,j=col-1;i>=0&&j>=0; i--,j--){
            if(board[i][j] === 'Q') return false
        }
        for(let i=row-1,j=col+1;i>=0&&j<n;i--,j++){
            if(board[i][j] === 'Q') return false
        }
        return true
    }

    const traversal =  (row)=>{
        if(row === n){
            result.push(board.map(value=>value.join('')))
            return 
        }
        for(let col = 0; col < n; col++){
            if(isValid(row,col)){
                board[row][col] = 'Q'
                traversal(row+1)
                board[row][col] = '.'
            }
        }
    }

    traversal(0)
    return result
};
