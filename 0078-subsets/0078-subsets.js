/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    backtracking(nums,[],result,0)
    return result
};

const backtracking = (nums,path,result,index)=>{
    if(nums.length === index)
        return result.push(path)
    backtracking(nums,[...path,nums[index]],result,index+1)
    backtracking(nums,path,result,index+1)
}