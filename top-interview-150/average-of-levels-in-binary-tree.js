/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const result = []
    const queue = [root]
    while(queue[0]){
        const queueLength = queue.length
        const row = []
        for(let i=0; i<queueLength; i++){
            const curr = queue.shift()
            row.push(curr.val)
            if(curr.left)queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        const sum = row.reduce((prev,curr)=>prev + curr,0)
        result.push(sum/row.length)
    }
    return result
};
