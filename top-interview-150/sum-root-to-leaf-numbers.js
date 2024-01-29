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
var sumNumbers = function(root) {
    let result = 0
    const traversal = (root,curr)=>{
        if(!root)
             return null
        if(!root.left && !root.right) result  = result + Number(curr + root.val)
        curr = curr + root.val
        traversal(root.left,curr)
        traversal(root.right,curr)
    }
    traversal(root,'')
    return result
};
