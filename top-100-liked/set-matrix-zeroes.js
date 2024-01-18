/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const target = []
    const rows = matrix.length
    const cols = matrix[0].length
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(matrix[i][j] === 0) target.push([i,j])
        }
    }
    for(const value of target){
        const [x,y] = value
        for(let i=0; i<rows; i++){
            matrix[i][y] = 0
        }
        for(let j=0; j<cols; j++){
            matrix[x][j] = 0
        }
    }
};
