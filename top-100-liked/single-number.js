
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map()
    for(const num of nums){
        if(map.has(num)) map.set(num,map.get(num) + 1)
        else map.set(num,1)
    }
    return Array.from(map.entries()).find(value=>value[1] === 1)[0]
};
