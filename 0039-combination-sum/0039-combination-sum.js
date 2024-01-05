/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []  
    backtracking(candidates,target,result,[])
    return result
};

const backtracking = (candidates,target,result,path)=>{
    if(target < 0)
        return 
    else if(target === 0)
        return result.push(path)
    for(const [index,value] of candidates.entries())
        backtracking([...candidates.slice(index)],target-value,result,[...path,value])
}
