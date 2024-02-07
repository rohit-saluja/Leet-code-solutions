/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const rows = s1.length
    const cols = s2.length
    const dp = Array(rows+1).fill(false).map(value=>Array(cols+1).fill(false))
    dp[0][0] = true
    if(s1.length + s2.length !== s3.length) return false
    
    for(let i=1; i<rows+1; i++){
        dp[i][0] = (dp[i-1][0] && s1[i-1] === s3[i-1])
    }
    for(let j=1; j<cols+1; j++){
        dp[0][j] = (dp[0][j-1] && s2[j-1] === s3[j-1])
    }

    for(let i=1; i<rows+1; i++){
        for(let j=1; j<cols+1; j++){
            dp[i][j] = ((dp[i-1][j] && s1[i-1] === s3[i+j-1]) || (dp[i][j-1] && s2[j-1]  === s3[i+j-1]))
        }
    }
    return dp[rows][cols]
};
