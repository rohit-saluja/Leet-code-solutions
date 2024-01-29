/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const queue = []
    const order = []
    const degree = Array(numCourses).fill(0)
    const graph = new Map()
    for(const [e,v] of prerequisites){
        if(graph.has(v)){
            graph.get(v).push(e)
        }else graph.set(v,[e])
        degree[e] = degree[e] + 1
    }
    for(let i=0; i<numCourses; i++){
        if(degree[i] === 0) queue.push(i)
    }
    while(queue.length){
        const v = queue.shift()
        order.push(v)
        if(graph.has(v)){
            for(const e of graph.get(v)){
                degree[e] = degree[e] - 1
                if(degree[e] === 0){
                    queue.push(e)
                }
            }
        }
    }
    return order.length === numCourses ? order : []
};
