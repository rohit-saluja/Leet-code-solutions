/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 1
    let right = Math.floor(x/2) + 1
    while(left <=right){
        const middle = Math.floor((left + right)/2)
        const middleValue = middle * middle
        if(x  > middleValue) left = middle + 1
        else if(x < middleValue) right = middle - 1
        else return middle
    }
    return right
};
