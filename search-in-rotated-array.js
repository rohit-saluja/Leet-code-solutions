/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums,target,0,nums.length-1)
};

const binarySearch=(nums,target,left,right)=>{
    while(left<=right){
        let middle = Math.round((left+right)/2)
        if(nums[middle] === target)
            return middle
        if(nums[left] < nums[middle]){
            if(nums[left] <=target && nums[middle] > target){
                right = middle - 1
            }else{
                left = middle + 1
            }
        }else{
            if(nums[right]>=target && nums[middle] < target){
                left = middle + 1
            }else{
                right = middle - 1
            }
        }

    }
    return -1
}
