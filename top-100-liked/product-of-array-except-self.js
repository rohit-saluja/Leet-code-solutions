**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let rightMultiple = 1
    let leftMultiple = 1
    const result = []

    for(let i=nums.length-1; i>=0; i--){
        result[i] = rightMultiple
        rightMultiple = rightMultiple * nums[i]
    }

    for(let i=0; i<nums.length; i++){
        result[i] = leftMultiple * result[i]
        leftMultiple = leftMultiple * nums[i]
    }

    return result
};
