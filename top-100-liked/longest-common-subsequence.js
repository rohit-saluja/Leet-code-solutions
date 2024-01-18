/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const rows = text1.length+1
    const cols = text2.length+1
    const dp = Array(rows).fill(0).map(()=>Array(cols).fill(0))
    for(let i=1; i<rows; i++){
        for(let j=1; j<cols; j++){
            if(text1[i-1] === text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[rows-1][cols-1]
};
