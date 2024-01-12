/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let result = 1
    const dp = Array(nums.length+1).fill(1)
    for(let i=0;i<dp.length;i++){
        for(let j=0; j<i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i],dp[j]+1)
                result = Math.max(dp[i],result)
            }
                
        }
    }
    return result
};
