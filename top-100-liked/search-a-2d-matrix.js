/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length
    const cols = matrix[0].length
    let left = 0,right = rows * cols - 1
    while(left<=right){
        const middle = Math.floor((left+right)/2)
        const selectedRow = Math.floor(middle/cols)
        const selectedCol = Math.floor(middle%cols)
        const middleValue = matrix[selectedRow][selectedCol]
        if(target === middleValue)
            return true
        if(target > middleValue)
            left = middle + 1
        else
            right = middle - 1
    }
    return false
};
