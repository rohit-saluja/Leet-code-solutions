/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n < 10){
        if(n === 1 || n==7){
            return true
        }else return false
    }
    let sum = n
    let result = 0
    while(sum>0){
        let carry = sum % 10
        result = carry * carry + result
        sum = Math.floor(sum / 10)
    }
    return isHappy(result)
};
