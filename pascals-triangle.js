/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = []
    for(let i = 0; i<numRows; i++){
        result.push(Array(i+1).fill(1))
        for(j=1; j<i;j++){
            result[i][j] = result[i-1][j]  + result[i-1][j-1]
        }
    }
    return result
};
