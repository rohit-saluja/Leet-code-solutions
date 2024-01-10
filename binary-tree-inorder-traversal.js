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
var inorderTraversal = function(root) {
    const result = []
    const traversal = (root)=>{
        if(!root) return null
        traversal(root.left)
        result.push(root.val)
        traversal(root.right)
    }
    traversal(root)
    return result
};
