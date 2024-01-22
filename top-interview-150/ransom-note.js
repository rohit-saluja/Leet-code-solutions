/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map()

    for(const ch of ransomNote){
        if(map.has(ch)){
            map.set(ch,map.get(ch)+1)
        }else map.set(ch,1)
    }

    for(const ch of magazine){
        if(map.has(ch))map.set(ch,map.get(ch)-1)
    }

    return Array.from(map.values()).every(value=>value <= 0)
};
