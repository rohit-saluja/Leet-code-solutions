/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const result = new Array(s.length).fill('')
    let index = 0
    for(let i=0; i<t.length;i++){
        if(s[index] === t[i]) {
            result[index] = t[i]
            index = index + 1
        }
    }
    return result.join('') === s
};
