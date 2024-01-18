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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const result = []  
    traversal(root,result)
    return result[k-1]
};

const traversal = (root,result)=>{
    if(!root)
        return 
    traversal(root.left,result)
    result.push(root.val)
    traversal(root.right,result)
}
