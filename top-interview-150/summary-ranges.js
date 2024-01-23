/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let right = 0
    const result = []
    while(right < nums.length){
        startValue = nums[right]
        while(right < nums.length-1 && nums[right + 1] === nums[right] + 1)
            right = right + 1
        endValue = nums[right]
        if(endValue !== startValue)result.push(startValue+"->"+endValue)
        else result.push(startValue + '')
        right = right + 1
    }
    return result
};
