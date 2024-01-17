/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left = 0
    let right = 0
    const result = []
    const map = new Map()
    for(const ch of p){
        if(map.has(ch))map.set(ch,map.get(ch)+1)
        else map.set(ch,1)
    }
    let count = p.length
    while(right < s.length){
        let curr = s[right]
        if(map.get(curr) > 0) count = count - 1
        if(map.has(curr))map.set(curr,map.get(curr) - 1)
        right = right + 1
        if(count === 0)result.push(left)
        if(right - left == p.length){
            let curr = s[left]
            if(map.get(curr) >= 0) count = count + 1
            if(map.has(curr)) map.set(curr,map.get(curr) + 1)
            left = left + 1
        }
    }
    return result
};
