/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let result = 0
    for(const [i,j] of points){
        const map = new Map();
        for(const [x,y]  of points){
            if(i===x && y===j) continue
            let slope = Infinity
            if(Math.abs(x-i) !== 0) {
                slope = (y-j)/(x-i)
            }
            if(!map.has(slope))map.set(slope,1)
            else map.set(slope,map.get(slope)+1)
            result = Math.max(map.get(slope),result)
        }
        
    }
    return result + 1
};
