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
var getMinimumDifference = function(root) {
    const array = []
    const traversal = (root)=>{
        if(!root) return null
        traversal(root.left)
        array.push(root.val)        
        traversal(root.right)
    }
    traversal(root)
    let result = Infinity
    for(let i=1; i<array.length; i++){
        result = Math.min(array[i]-array[i-1],result)
    }
    return result
};
