/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const a = new Map()
    const b = new Map()
    for(const [index,ch] of pattern.split('').entries()){
        if(a.has(ch)) a.set(ch,a.get(ch)+index+1)
        else a.set(ch,index+1)
    }
    for(const [index,word] of s.split(' ').entries()){
        if(b.has(word))b.set(word,b.get(word)+index +1)
        else b.set(word,index+1)
    }
    
    return Array.from(a.entries()).every(([ch,value],index)=>value === Array.from(b.values())[index])
};
