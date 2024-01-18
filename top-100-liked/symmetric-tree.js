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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root)
        return true
    return traversal(root.left,root.right)
};

const traversal = (leftRoot,rightRoot)=>{
    if(!leftRoot && !rightRoot)
        return true
    if((leftRoot && !rightRoot) || (!leftRoot && rightRoot) || (leftRoot.val !== rightRoot.val))
        return false
    else if(leftRoot && rightRoot)
        return traversal(leftRoot.left,rightRoot.right) && traversal(leftRoot.right,rightRoot.left)
    return true
}
