/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    const backtracking = (combination,open,close)=>{
        if(n*2 === combination.length){
            result.push(combination)
            return 
        }
        if(open < n)
            backtracking(combination + '(',open + 1,close)
        if(close < open)
            backtracking(combination + ')',open,close + 1)
    }
    backtracking('',0,0)
    return result
};
