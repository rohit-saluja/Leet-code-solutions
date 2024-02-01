/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let max = -Infinity
    let currMax = 0
    let min = Infinity
    let currMin = 0
    let total = 0
    for(let i=0; i<nums.length; i++){
        currMax = Math.max(currMax+nums[i],nums[i])
        max = Math.max(currMax,max)
        currMin = Math.min(currMin+nums[i],nums[i])
        min = Math.min(currMin,min)
        total = total + nums[i]
    }
    return max > 0 ? Math.max(max,total-min) : max
};
