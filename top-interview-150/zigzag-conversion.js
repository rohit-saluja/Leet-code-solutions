/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || s.length < numRows) return s
    let reverse = false
    let result = []
    for(let i=0; i<numRows; i++){
        result[i] = []
    }
    let count = 0
    for(let i=0; i<s.length;i++){
        result[count].push(s[i])
        reverse ? count-- : count++
        if(count === 0 || count === numRows-1) reverse = !reverse
    }
    let ans = ''
    ans = result.reduce((prev,next)=>prev + next.join(''),'')
    return ans
};
