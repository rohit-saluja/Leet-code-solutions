/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    const dp = Array(rows+1).fill(0).map(value=>Array(cols+1).fill(0))
    let result = 0
    for(let i=1; i<rows+1; i++){
        for(let j=1; j<cols+1; j++){
            if(matrix[i-1][j-1] === '1'){
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1
                result = Math.max(result,dp[i][j])
            }
        }
    }

    return result * result
    
};
