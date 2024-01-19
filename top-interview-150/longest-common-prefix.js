/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs) return ''

    return strs.reduce((prev,next)=>{
        let i=0
        while(prev[i] && next[i] && prev[i] == next[i]) i = i + 1
        return prev.slice(0,i)
    })
};
