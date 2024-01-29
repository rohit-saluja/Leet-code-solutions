/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rows = board.length
    const cols = board[0].length
    const dfs = (i,j,first,second)=>{
        if(i<0 || j < 0 || i > rows-1 || j > cols-1 || board[i][j] === first  || board[i][j] == second) return null
        board[i][j] = first
        dfs(i+1,j,first,second)
        dfs(i-1,j,first,second)
        dfs(i,j+1,first,second)
        dfs(i,j-1,first,second)
    }
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(i==0 || i==rows-1 || j==0 || j==cols-1){
                if(board[i][j] === 'O')
                    dfs(i,j,'T','X')
            }
        }
    }
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(board[i][j] === 'O') dfs(i,j,'X','X')
        }
    }

    for(let i=0; i<rows; i++){
        for(let j=0; j< cols; j++){
            if(board[i][j] === 'T') dfs(i,j,'O','X')
        }
    }
};
