/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyOne = Infinity
    let buyTwo = Infinity
    let sellOne = 0
    let sellTwo = 0
    for(let i=0; i<prices.length; i++){
        buyOne = Math.min(prices[i],buyOne)
        sellOne = Math.max(prices[i]-buyOne,sellOne)
        buyTwo = Math.min(prices[i]-sellOne,buyTwo)
        sellTwo = Math.max(prices[i]-buyTwo,sellTwo)
    }
    return sellTwo
};
