/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums.length)
        return null
    return traversal(0,nums.length-1,nums)
};


const traversal = (left,right,nums)=>{
    const middle = Math.round((left+right)/2)
    const rootValue = nums[middle]
    const root = new TreeNode(rootValue)
    if(left < middle)
        root.left = traversal(left,middle-1,nums)
    if(right > middle)
        root.right = traversal(middle+1,right,nums)
    return root
}

