/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0
    let right = 1
    while(right < nums.length){
        if(nums[left] !==0){
            left = left + 1 
            right = right + 1
        }else{
            if(nums[right]!==0){
                [nums[left],nums[right]] = [nums[right],nums[left]]
                left = left + 1
            }
            right = right + 1
        }
    }
    return nums
};
