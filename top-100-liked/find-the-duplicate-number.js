/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const set = new Set(nums)
    for(const num of nums){
        if(set.has(num)) set.delete(num)
        else return num
    }
};
