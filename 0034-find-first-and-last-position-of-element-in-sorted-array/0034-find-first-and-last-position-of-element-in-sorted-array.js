/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const start  = binarySearch(0,nums.length-1,target,nums)
    if(nums[start]!==target)
        return [-1,-1]
    const end = binarySearch(0,nums.length-1,target+1,nums)
    return [start,end-1]
};


const binarySearch = (left,right,target,nums)=>{
    while(left<=right){
        const middle = Math.round((left+right)/2)
        if(target > nums[middle])
            left = middle + 1
        else
            right = middle - 1
    }
    return left
}