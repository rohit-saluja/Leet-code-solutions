/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0
    const set = new Set()
    let left = 0
    for(let i=0; i<s.length; i++){
        while(set.has(s[i])){
            set.delete(s[left])
            left = left + 1
        }
        set.add(s[i])
        result = Math.max(result,i-left+1)
    }
    return result
};
