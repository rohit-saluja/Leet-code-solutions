/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prevMax = nums[0]  
    let prevMin = nums[0]
    let result = nums[0]
    for(let i=1; i<nums.length;i++){
        const currMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i])
        const currMin = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i])
        prevMax = currMax
        prevMin = currMin
        result = Math.max(result,currMax)
    }
    return result
};
