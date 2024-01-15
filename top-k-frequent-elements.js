/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()
    for(const [index,value] of nums.entries()){
        if(map.has(value))map.set(value,map.get(value)+1)
        else map.set(value,1)
    }
    return Array.from(map.entries()).sort((a,b)=>b[1]-a[1]).map(value=>value[0]).slice(0,k)
};
