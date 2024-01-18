/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let result = 0
    const dfs = (i,j)=>{
        if(i<0 || i> rows-1 || j<0 || j>cols-1 || grid[i][j] === '0')
            return false
        grid[i][j] = '0'
        dfs(i,j+1)
        dfs(i+1,j)
        dfs(i-1,j)
        dfs(i,j-1)
    }
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] === '1')dfs(i,j),result = result + 1
        }
    }
    return result
};
