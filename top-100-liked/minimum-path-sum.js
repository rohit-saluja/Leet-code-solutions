/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const dp = grid
    for(let i=1; i<rows; i++){
        dp[i][0] = dp[i-1][0] + dp[i][0]
    }
    for(let j=1; j<cols; j++){
        dp[0][j] = dp[0][j-1] + dp[0][j]
    }
    for(let i=1; i<rows; i++){
        for(let j=1; j<cols; j++){
            dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + dp[i][j]
        }
    }
    return dp[rows-1][cols-1]
};
