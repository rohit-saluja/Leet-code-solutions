/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let result = 0
    for(const num of nums){
        if(set.has(num-1)) continue
        let currMax = 1
        let currNum = num
        while(set.has(currNum+1)){
            currMax = currMax + 1
            currNum  = currNum + 1
        }
        result  = Math.max(result,currMax)
    }

    return result
};
