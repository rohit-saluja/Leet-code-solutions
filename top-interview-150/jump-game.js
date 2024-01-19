/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let coverage = 0
    let lastIndex = 0
    for(const [index,value] of nums.entries()){
        coverage = Math.max(coverage,index+value)
        if(index === lastIndex){
            lastIndex = coverage
            if(coverage >= nums.length-1)
                return true
        }
    }
    return false
};

