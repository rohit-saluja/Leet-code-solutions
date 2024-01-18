/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const isPalindrome = (s)=>s.split('').reverse().join('') === s
    const result = []
    const backtracking = (path,s)=>{
        if(!s.length){
            return result.push(path)
        }
        
        for(let i=1; i<=s.length; i++){
            const prefix = s.substring(0,i)
            if(isPalindrome(prefix)){
                const postFix = s.substring(i)
                backtracking([...path,prefix],postFix)
            }
            
        }
    }
    backtracking([],s)
    return result
};
