/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const board = new Array(n).fill(0).map(()=>Array(n).fill('.'))
    const result = []
    const isValid = (row,col)=>{
        for(let i=0; i<row; i++){
            if(board[i][col] === 'Q')return false
        }
        for(let i=row-1, j=col-1; i>=0 && j>=0; i--,j--){
            if(board[i][j] ==='Q') return false
        }
        for(let i= row-1, j= col+1;i>=0 && j<= n-1; i--,j++){
            if(board[i][j] == 'Q') return false
        }
        return true
        
    }
    const backtracking = (row)=>{
        if(row === n){
            result.push([...board].map(row=>row.join('')))
            return 
        }
        for(let col = 0; col <n; col++){
            if(isValid(row,col)){
                board[row][col]  = 'Q'
                backtracking(row+1)
                board[row][col] = '.'
            }
        }
    }

    backtracking(0)

    return result
};
