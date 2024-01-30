/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const directions = [
        [1,0],
        [0,1],
        [-1,0],
        [0,-1]
    ]

    const rows = board.length
    const cols = board[0].length

    const result = []

    const buildTrie = ()=>{
        let root = {}
        for(const word of words){
            let node = root
            for (const ch of word){
                if(!node[ch])node[ch] = {}
                node = node[ch]
            }
            node.word = word
        }
        return root
    }

    const root = buildTrie()

    const dfs = (root,i,j)=>{
        if(root && root.word ){
            result.push(root.word)
            root.word = null
        }
        if(i < 0 || i > rows-1 || j < 0 || j > cols-1) return null
        if(!root[board[i][j]]) return null
        const value = board[i][j]
        board[i][j] = '#'
        dfs(root[value],i+1,j)
        dfs(root[value],i,j+1)
        dfs(root[value],i-1,j)
        dfs(root[value],i,j-1)
        board[i][j] = value
    }


    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            dfs(root,i,j)
        }
    }
    return result
};
