/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return null
    const map = new Map()
    const clone = node =>{
        if(!map.has(node.val)){
            map.set(node.val,new Node(node.val))
            map.get(node.val).neighbors = node.neighbors.map(clone)
        }
        return map.get(node.val)
    }
    return clone(node)
};
