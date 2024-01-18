/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const rows = word1.length+1
    const cols = word2.length+1
    const dp  = Array.from({length:rows},()=>Array(cols).fill(0))
    for(let i=0; i<rows; i++){
        dp[i][0] = i
    }
    for(let j=0; j<cols; j++){
        dp[0][j] = j
    }
    for(let i=1; i<rows; i++){
        for(let j=1; j<cols; j++){
            dp[i][j] = Math.min(dp[i-1][j] + 1,dp[i][j-1] + 1,dp[i-1][j-1] + (word1[i-1]!=word2[j-1] ? 1: 0))
        }
    }
    return dp[rows-1][cols-1]
};
