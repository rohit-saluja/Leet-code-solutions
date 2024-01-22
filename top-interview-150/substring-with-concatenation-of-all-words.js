/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let singleLen = words[0].length
    let totalLen = singleLen * words.length
    const map = new Map()
    const result = []
    for(let word of words){
        if(map.has(word)){
            map.set(word,map.get(word) + 1)
        }else map.set(word,1)
    }

    for(let i=0; i<s.length-totalLen+1; i++){
        const window = s.slice(i,totalLen+i)
        if(isValid(window,map,singleLen)){
            result.push(i)
        }
    }
    return result
};



const isValid = (window,map,singleLen)=>{
        const temp = new Map();
        let left = 0
        while(left < window.length){
            const word = window.slice(left,left+singleLen)
            left = left + singleLen
            if(map.has(word)){
                if(temp.has(word))temp.set(word,temp.get(word)+1)
                else temp.set(word,1)
            }
        }
        return Array.from(map.keys()).every(key=>map.get(key) === temp.get(key))
    }
