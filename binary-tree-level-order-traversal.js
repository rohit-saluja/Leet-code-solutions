/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? nu`ll : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    const queue = [root]
    while(queue[0]){
        const row = []
        const queueLength = queue.length
        for(let i=0; i<queueLength; i++){
            const curr = queue.shift()
            row.push(curr.val)
            if(curr.left)queue.push(curr.left)
            if(curr.right)queue.push(curr.right)
        }
        result.push(row)
    }
    return result
};
