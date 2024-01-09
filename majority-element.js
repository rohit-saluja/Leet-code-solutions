/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map()
    for(const num of nums){
        if(map.has(num))map.set(num,map.get(num)+1)
        else map.set(num,1)
    }
    return Array.from(map).find(value=>value[1] >= (Math.round(nums.length)/2))[0]
};
