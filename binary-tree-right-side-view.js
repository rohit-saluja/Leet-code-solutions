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
var rightSideView = function(root) {
    const result = []
    let height = 0
    const traversal = (root,height)=>{
        if(!root)return null
        traversal(root.left,height+1)
        result[height] = root.val
        traversal(root.right,height+1)
    }
    traversal(root,height)
    return result
};
