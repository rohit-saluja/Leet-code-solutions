/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0)
    let result = 0
    const stack = []
    for(let i=0; i<heights.length; i++){
        let startHeight = i
        while(stack.length && stack[stack.length-1][1] > heights[i]){
            const [pos,height]  = stack.pop()
            result = Math.max(result,(i-pos) * height)
            startHeight = pos
        }
        stack.push([startHeight,heights[i]])
    }
    return result
};
