/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = []
    while(matrix.length){
        const first = matrix.shift()
        result.push(...first)
        for(const m of matrix){
            const value = m.pop()
            if(value !== undefined)
                result.push(value)
            m.reverse()
        }
        matrix.reverse()
    }
    return result
};
