/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=>a[0]-b[0])
    let prev = null
    let count = 0
    for(let [start,end] of points){
        if(prev === null || start > prev){
            count = count + 1
            prev = end
        }else{
            prev = Math.min(end,prev)
        }
    }
    return count
};
