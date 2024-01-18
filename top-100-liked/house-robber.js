/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let indexOne = 0
    let indexTwo = 0
    for(let i=nums.length-1; i>-1; i--){
        const skipped = indexOne
        const robbed = indexTwo + nums[i]
        const max = Math.max(skipped,robbed)
        indexTwo = indexOne
        indexOne = max
    }
    return indexOne
};
