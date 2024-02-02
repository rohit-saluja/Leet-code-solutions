/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let i = 0
    while(left !== right){
        left = left >> 1
        right = right >> 1
        i = i + 1
    }
    return left << i
};
