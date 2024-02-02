/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map =  new Map()
    for(const [index,value] of nums.entries()){
        if(!map.has(value))map.set(value,1)
        else map.set(value,map.get(value)+1)
    }
    return Array.from(map.entries()).find(([key,value])=>value === 1)[0]
};
