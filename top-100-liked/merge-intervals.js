/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const result = []
    intervals.sort((a,b)=>a[0] != b[0] ? a[0]-b[0] : a[1] - b[1])
    for(const interval of intervals){
        if(result.length === 0 || (result[result.length-1][1] < interval[0]))
            result.push(interval)
        else{
            result[result.length-1][1] = Math.max(result[result.length-1][1],interval[1])
        }
    }
    return result
};
