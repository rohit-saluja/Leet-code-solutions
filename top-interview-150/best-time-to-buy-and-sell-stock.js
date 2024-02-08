/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = Infinity
    let sell = 0
    for(let i=0; i<prices.length; i++){
        buy = Math.min(prices[i],buy)
        sell = Math.max(prices[i]-buy,sell)
    }   
    return sell
};
