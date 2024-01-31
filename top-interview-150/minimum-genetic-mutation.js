/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    bank = new Set(bank)
    if(!bank.has(endGene)) return -1
    const queue = [startGene]
    let steps = 0
    const choices = ['A','C','G','T']
    const seen = new Set([startGene]);
    while(queue.length){
        const queueLength = queue.length
        for(let i=0; i<queueLength; i++){
            const node = queue.shift()
            if(node === endGene) return steps
            for(const choice of choices){
                for(let j=0; j<node.length; j++){
                    const next  = node.substring(0,j) + choice + node.substring(j+1)
                    if(!seen.has(next) && bank.has(next) ){
                        seen.add(next)
                        queue.push(next)
                    }
                }
            }
        }
        steps = steps + 1
    }
    return -1

}
