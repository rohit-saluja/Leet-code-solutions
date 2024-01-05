/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = []
    backtracking([],result,s)
    return result
};

const isPalindrome = (s)=>s.split('').reverse().join('') === s

const backtracking = (path,result,s)=>{
    if(!s.length)
        return result.push(path)
    for(let i=1;i<=s.length;i++){
        const prefix = s.substring(0,i)
        const postfix = s.substring(i)
        if(isPalindrome(prefix))
            backtracking([...path,prefix],result,postfix)
    }

}