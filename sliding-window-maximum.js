/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const dqueue = []
    const result = []
    for(let i=0; i<nums.length;i++){
        while(nums[dqueue[dqueue.length-1]] <= nums[i])
            dqueue.pop()
        dqueue.push(i)
        if(dqueue[0] === i-k)
            dqueue.shift()
        if(i>=k-1)
            result.push(nums[dqueue[0]])
    }
    return result
};
