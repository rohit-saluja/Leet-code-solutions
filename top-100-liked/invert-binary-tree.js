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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    return traversal(root)
};

const traversal = (root)=>{
    if(!root)
        return null
    traversal(root.left)
    traversal(root.right)
    temp  = root.left
    root.left = root.right
    root.right = temp 
    return root
}
