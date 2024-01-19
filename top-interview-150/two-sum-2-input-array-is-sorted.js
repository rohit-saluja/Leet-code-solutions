/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = new Map()
    for(const [index,num] of numbers.entries()){
        if(map.has(target - num)){
            return [map.get(target-num) + 1,index + 1]
        }else {
            map.set(num,index)
        }
    }
};
