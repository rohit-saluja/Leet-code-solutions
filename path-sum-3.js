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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let result = 0
    const map = {}
    const traversal = (root,pathSum)=>{
        if(!root)
            return null
        pathSum = pathSum + root.val
        if(pathSum === targetSum)
            result = result + 1
        if(map[pathSum - targetSum])
            result = result + map[pathSum-targetSum]
        if(map[pathSum])
            map[pathSum]  = map[pathSum] + 1
        else
            map[pathSum] = 1
        if(root.left)
            traversal(root.left,pathSum)
        if(root.right)
            traversal(root.right,pathSum)
        map[pathSum] = map[pathSum] - 1
    }
    traversal(root,0)
    return result
};
