/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map()
    let result = 0
    let sum = 0
    map.set(0,1)
    for(const [index,value] of nums.entries()){
        sum = sum + value
        if(map.has(sum-k))
            result = result + map.get(sum-k)
        if(map.has(sum))
            map.set(sum,map.get(sum)+1)
        else map.set(sum,1)
    }
    return result
};
