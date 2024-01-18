/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root)
        return null
    if(p === root || q === root)
        return root
    const leftRoot = lowestCommonAncestor(root.left,p,q)
    const rightRoot = lowestCommonAncestor(root.right,p,q)
    return (leftRoot && rightRoot ? root : leftRoot || rightRoot)
};
