/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return ''
    let left = 0
    let right = -1
    let min = ''
    const map = new Map()
    for(const ch of t){
        if(map.has(ch)){
            map.set(ch,map.get(ch) + 1)
        }else map.set(ch,1)
    }    
    let count = map.size
    while(right <= s.length){
        if(count === 0){
            let curr = s[left]
            if(map.has(curr))map.set(curr,map.get(curr)+1)
            if(map.get(curr) > 0)count = count + 1
            let temp = s.substring(left,right+1)
            if(min === '')min = temp
            else min = min.length < temp.length ? min : temp
            left = left + 1
        }else {
            right = right + 1
            curr = s[right]
            if(map.has(curr))map.set(curr,map.get(curr)-1)
            if(map.get(curr) === 0) count = count - 1
        }
    }
    return min
};
