/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0
    let right = 1
    while(right < nums.length){
        if(nums[left]!==val){
            left = left + 1
            right = right + 1
        }else {
            if(nums[right] !== val){
                [nums[left],nums[right]] = [nums[right],nums[left]]
                left = left + 1
            }
            right = right + 1
        }
    }

    return nums.filter(value=>value!== val).length
};
