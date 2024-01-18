/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    const backtracking = (path,index)=>{
        if(index === nums.length){
             return result.push(path)
        }
        backtracking([...path,nums[index]],index+1)
        backtracking(path,index+1)
    }
    backtracking([],0)
    return result
};
