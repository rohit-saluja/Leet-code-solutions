/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length
    const cols = board[0].length
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(dfs(word,board,i,j,0,rows,cols))
                return true
        }
    }
    return false
};

const dfs = (word,board,i,j,index,rows,cols)=>{
    if(index === word.length)
        return true
    if(i<0 || j>cols-1 || j<0 || i>rows-1 || board[i][j] !== word[index])
        return false
    board[i][j]  = '#'
    const isFound = (dfs(word,board,i-1,j,index+1,rows,cols) ||
                    dfs(word,board,i+1,j,index+1,rows,cols)  ||
                    dfs(word,board,i,j-1,index+1,rows,cols) || 
                    dfs(word,board,i,j+1,index+1,rows,cols))
    board[i][j] = word[index]
    return isFound
}