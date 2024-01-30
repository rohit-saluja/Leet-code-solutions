/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const queue = [beginWord]
    const seen = new Set([beginWord])
    const wordListSet = new Set(wordList)
    const choices = new Set()
    for(const word of wordList){
        for(const ch of word){
            choices.add(ch)
        }
    }

    let steps = 1
    
    while(queue.length){
        const queueLength = queue.length
        for(let i=0; i<queueLength; i++){
            const node = queue.shift()
            if(node === endWord) return steps
            for(const choice of choices){
                for(let j=0; j<node.length; j++){
                    const neighbour = node.substring(0,j) + choice + node.substring(j+1)
                    if(!seen.has(neighbour) && wordListSet.has(neighbour)){
                        seen.add(neighbour)
                        queue.push(neighbour)
                    }
                    
                }
            }
        }
        steps = steps + 1
    }
    return 0

};
