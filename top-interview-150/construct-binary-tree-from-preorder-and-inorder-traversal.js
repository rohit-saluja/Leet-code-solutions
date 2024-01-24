/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const inorderMap = new Map()
    for(const [index,value] of inorder.entries()){
        inorderMap.set(value,index)
    }
    return traversal(inorderMap,preorder,0,inorder.length-1,0)
};

const traversal = (inorderMap,preorder,left,right,pivot)=>{
    const rootValue = preorder[pivot]
    const middle = inorderMap.get(rootValue)
    const root = new TreeNode(rootValue)
    if(left < middle)
        root.left = traversal(inorderMap,preorder,left,middle-1,pivot+1)
    if(right > middle)
        root.right = traversal(inorderMap,preorder,middle+1,right,middle-left+pivot+1)
    return root
}
