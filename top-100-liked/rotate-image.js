/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    for(let i=0; i<rows; i++){
        for(let j=i+1; j<cols; j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    for(let i=0; i<rows; i++){
        matrix[i].reverse()
    }
};
