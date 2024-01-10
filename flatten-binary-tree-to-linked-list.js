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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let head = null
    const traversal = (root)=>{
        if(!root) return null
        if(root.right)
            traversal(root.right)
        if(root.left)
            traversal(root.left)
        root.left = null, root.right = head, head = root
    }
    traversal(root)
};
