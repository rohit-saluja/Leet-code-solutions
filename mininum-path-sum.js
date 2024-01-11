/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    for(let i=1; i<rows; i++)
        grid[i][0] = grid[i-1][0] + grid[i][0]
    for(let j=1; j<cols; j++)
        grid[0][j] = grid[0][j-1] + grid[0][j]
    for(let i=1; i<rows; i++){
        for(let j=1; j<cols; j++)
            grid[i][j] = Math.min(grid[i-1][j],grid[i][j-1]) + grid[i][j]
    }
    return grid[rows-1][cols-1]
};
