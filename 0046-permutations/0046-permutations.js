/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    backtracking(nums,result,[])
    return result
};

const backtracking = (nums,result,path)=>{
    if(!nums.length)
        return result.push(path)
    for(const [index,value] of nums.entries())
        backtracking([...nums.slice(0,index),...nums.slice(index+1)],result,[...path,value])
}   