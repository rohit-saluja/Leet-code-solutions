/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const swap = (i,j)=>{
        [nums[i],nums[j]] = [nums[j],nums[i]]
    }
    const reverse = (idx)=>{
        let start = idx;
        let end = nums.length - 1
        while(start < end){
            swap(start,end)
            start = start + 1
            end = end - 1
        }
    }
    const nextLarge = (idx)=>{
        for(let i=nums.length-1; i> idx; i--){
            if(nums[i] > nums[idx]) return i
        }
    }
    for(let i=nums.length-1; i>=0; i--){
        if(nums[i] < nums[i+1]){
            const large = nextLarge(i)
            swap(i,large)
            reverse(i+1)
            return 
        }
    }
    
    nums.reverse()
};
