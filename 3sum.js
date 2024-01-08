/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = []
    nums.sort((a,b)=>a-b)
    for(let i=0; i<nums.length; i++){
        let left = i + 1
        let right = nums.length - 1
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right]
            if(sum === 0){
                result.push([nums[i],nums[left],nums[right]])
                while(nums[left] == nums[left+1]) left = left + 1
                while(nums[right] === nums[right-1]) right = right - 1
                left = left + 1
                right = right - 1
            }else if (sum < 0) left = left + 1
            else right = right - 1
        }
        while(nums[i] === nums[i+1]) i = i + 1
    }
    return result
};
