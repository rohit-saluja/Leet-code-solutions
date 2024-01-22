/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let [index,value] of nums.entries()){
        if(map.has(target-value)){
            return [map.get(target-value),index]
        }else{
            map.set(value,index)
        }
    }
};
