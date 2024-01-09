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
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity

    const findSums  = (node)=>{
        if(!node) return 0
        let left = findSums(node.left)
        let right = findSums(node.right)
        let allSum = left + right + node.val
        let leftSum = left + node.val
        let rightSum = right + node.val
        max = Math.max(max,node.val,allSum,leftSum,rightSum)
        return Math.max(leftSum,rightSum,node.val)
    }
    findSums(root)
    return max
};
