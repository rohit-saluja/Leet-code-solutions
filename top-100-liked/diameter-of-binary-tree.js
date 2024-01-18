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
var diameterOfBinaryTree = function(root) {
    let result = 0
    const traversal = (root)=>{
        if(!root)
            return 0
        const leftRoot  = traversal(root.left)
        const rightRoot = traversal(root.right)
        result = Math.max(leftRoot+rightRoot,result)
        return Math.max(leftRoot,rightRoot) + 1
    }
    traversal(root)
    return result
};
