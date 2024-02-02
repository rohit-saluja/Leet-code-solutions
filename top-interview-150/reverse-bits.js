/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0
    let count = 32
    while(count){
        result = result * 2
        result = (n & 1) + result
        n = n >> 1
        count = count - 1
    }
    return result
};
