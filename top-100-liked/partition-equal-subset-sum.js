/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((acc,curr)=>acc+curr,0)
    if(sum%2!=0)
        return false
    const half = sum/2
    const dp = Array(half).fill(false)
    dp[0] = true
    for(let i=0; i<nums.length; i++){
        for(let j=half; j>=i; j--){
            dp[j] = dp[j] || dp[j-nums[i]]
        }
    }
    return dp[half] || false
};
