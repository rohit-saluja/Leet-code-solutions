/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1]
    let result = 0
    for(const [i,value] of s.split('').entries()){
        if(value === '(')
            stack.push(i)
        else if (stack.length === 1)
            stack[0] = i
        else
            stack.pop(),result = Math.max(result,i-stack[stack.length-1])
    }
    return result
};
