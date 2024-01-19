/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0
    let right = 0
    let result = 0
    let sum = 0
    while(right < nums.length){
        sum = sum + nums[right]
        while(sum >= target){
            let curr = right - left + 1
            if(result === 0 || curr < result) result = curr
            sum = sum - nums[left]
            left = left  + 1
        }
        right = right + 1
    }

    return result
};
