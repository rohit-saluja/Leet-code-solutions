/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0
    let right = 0
    let max_profit = 0
    
    while (right < prices.length){
        if(prices[left] < prices[right]){
            profit = prices[right]-prices[left]
            max_profit = Math.max(max_profit,profit)
        }else{
            left = right
        }
        right = right + 1
    }
    return max_profit
};
