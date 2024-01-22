/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const rows = board.length
    const cols = board[0].length
    const getCount = (i,j)=>{
        let count = 0
        const directions = [
            [-1,-1],
            [1,1],
            [-1,1],
            [1,-1],
            [1,0],
            [0,1],
            [-1,0],
            [0,-1]
        ]
        for(const [dx,dy] of directions){
            const x = i + dx
            const y = j + dy
            
            if(x < 0 || y < 0 || x > rows-1 || y > cols-1){
                continue
            }
            if(Math.abs(board[x][y]) === 1) {
                count = count + 1
            }
        }
        return count
    }

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            const count = getCount(i,j)
            if(board[i][j] === 1 && (count < 2 || count > 3))
                board[i][j] = -1
            else if (board[i][j] === 0 && count === 3 )
                board[i][j] = 2
        }
    }
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(board[i][j] === 2)
                board[i][j] = 1
            else if (board[i][j] === -1)
                board[i][j]  = 0
        }
    }
};
