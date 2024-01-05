/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    backtracking('',n,result,0,0)
    return result
};
const backtracking  = (combination,n,result,open,close)=>{
    if(combination.length === n*2)
        return result.push(combination)
    if(open < n)
        backtracking(combination + '(',n,result,open+1,close)
    if(close < open)
        backtracking(combination + ')',n,result,open,close+1)
}