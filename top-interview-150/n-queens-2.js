/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length
    const cols = board[0].length
    const directions = [
        [0,1],
        [1,0],
        [-1,0],
        [0,-1]
    ]
    let result = false
    const dfs = (i,j,word,index)=>{
        console.log(word,board,index);
        if(word.length === index) {
            result = true
            return
        }
        if(i<0 || j<0 || i > rows-1 || j > cols-1 || word[index] !== board[i][j]) return 
        board[i][j] = '#'
        for(const [dx,dy] of directions){
            const x = dx + i
            const y = dy + j
            dfs(x,y,word,index+1)
        }
        board[i][j]  = word[index]
    }

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
                console.log(dfs(i,j,word,0));
                if(dfs(i,j,word,0)){
                    return true
                }
        }
    }

    return false
};
