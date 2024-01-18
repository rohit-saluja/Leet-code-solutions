/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = Array(n+1).fill(Infinity)
    dp[0] = 0
    for(let i=0; i<n+1; i++){
        for(let j=0; j*j<=i;j++){
            dp[i] = Math.min(dp[i],dp[i-j*j] + 1)
        }
    }

    return dp[n]
};