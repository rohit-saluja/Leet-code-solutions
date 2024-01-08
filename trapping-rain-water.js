/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0
    let left = 0
    let right = height.length-1
    let leftMax = 0
    let rightMax = 0
    while(left < right){
        leftMax = Math.max(leftMax,height[left])
        if(leftMax > height[left]) result = result + leftMax - height[left]
        rightMax = Math.max(rightMax,height[right])
        if(rightMax > height[right]) result = result + rightMax - height[right]
        if(height[left] < height[right]) left = left + 1
        else right = right - 1
    }
    return result
};
