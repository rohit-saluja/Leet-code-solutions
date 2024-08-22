/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Map()
    let order = []
    const degree = Array(numCourses).fill(0)
    const queue = []
    for(const [e,v] of prerequisites){
        if(graph.get(v)){
            graph.get(v).push(e)
        }else{
            graph.set(v,[e])
        }
        degree[e] = degree[e] + 1
    }
    for(let i=0;i<numCourses;i++){
        if(degree[i] === 0)queue.push(i)
    }
    while(queue.length){
        const v = queue.shift()
        if(graph.get(v)){
            for(const e of graph.get(v)){
                degree[e] = degree[e] - 1
                if(degree[e] == 0)queue.push(e)
            }
        }
        order = order + 1
    }
    return order.length === numCourses ? true : false
};
