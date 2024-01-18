/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const map = new Map();
    let coverage = 0
    const result = []
    let lastIndex = 0
    for(let i=0; i<s.length; i++){
        map.set(s[i],i)
    }
    for(let i=0; i<s.length; i++){
        coverage = Math.max(coverage,map.get(s[i]))
        if(coverage === i){
            result.push(coverage-lastIndex+1)
            lastIndex = i + 1
        }
    }
    return result    
};
