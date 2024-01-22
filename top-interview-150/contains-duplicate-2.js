/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for(const [index,num]of nums.entries()){
        if(map.has(num)){
            if(index-map.get(num) <=k){
                return true
            }else map.set(num,index)
        }else map.set(num,index)
    }
    return false
};
