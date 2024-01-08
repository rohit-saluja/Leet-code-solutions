/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let low = 0
    let high = 1
    while(high < nums.length){
        if(nums[low] !== 0){
            low = low + 1
            high = high + 1
        }else{
            if(nums[high] != 0){
                [nums[low],nums[high]] = [nums[high],nums[low]]
                low = low + 1
            }
            high = high + 1
        }
    }
};
