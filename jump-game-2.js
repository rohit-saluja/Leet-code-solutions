/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let coverage = 0
    let lastIndex = 0
    let result = 0
    if(nums.length === 1) return 0
    for(let i=0; i<nums.length; i++){
        coverage = Math.max(coverage,i+nums[i])
        if(lastIndex === i){
            lastIndex = coverage 
            result = result + 1
            if(coverage >= nums.length-1)
                return result 
        }
    }
    return result
};
