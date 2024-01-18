/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(Infinity)
    dp[0] = 0
    for(const coin of coins){
        for(let i=coin;i<=amount;i++){
            dp[i] = Math.min(dp[i-coin]+1,dp[i])
        }
    }
    return dp[dp.length-1] === Infinity ? -1 :  dp[dp.length-1]
};
