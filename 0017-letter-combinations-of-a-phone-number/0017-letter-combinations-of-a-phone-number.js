/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits)
        return []
        
    const phoneMap = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    const result = []
    backtracking('',result,digits,phoneMap)
    return result
};

const backtracking = (combination,result,digits,phoneMap)=>{
    if(!digits.length)
        return result.push(combination)
    for(const [index,value] of  phoneMap[parseInt(digits[0])-2].split('').entries())
        backtracking(combination + value,result,digits.slice(1),phoneMap)
}