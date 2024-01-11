/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const rows = m
    const cols = n
    const dp = Array(rows).fill(0).map(()=>Array(cols).fill(0))
    for(let i=0; i<rows; i++){
        dp[i][0] = 1
    }
    for(let j=0; j<cols; j++){
        dp[0][j] = 1
    }
    for(let i=1; i<rows; i++){
        for(let j=1; j<cols; j++){
            dp[i][j]  = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[rows-1][cols-1]
};
