/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0
    let mid = 0
    let high = nums.length-1
    const swap = (i,j)=>{
        [nums[i],nums[j]] = [nums[j],nums[i]]
    }
    while(mid <= high){
        if(nums[mid] === 0){
            swap(low,mid)
            low = low + 1
            mid = mid + 1
        }else if (nums[mid] === 1){
            mid = mid + 1
        }else if (nums[mid] === 2) {
            swap(mid,high)
            high = high - 1
        }
    }
};
