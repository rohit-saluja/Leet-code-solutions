/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length-1
    while(left<=right){
        const middle = Math.round((left+right)/2)
        if(target === nums[middle])
            return middle
        else if (target > nums[middle])
            left = middle + 1
        else
            right = middle - 1
    }
    return left
};
