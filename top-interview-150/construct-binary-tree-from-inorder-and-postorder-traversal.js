/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const inorderMap = new Map()
    for(const [index,value] of inorder.entries()){
        inorderMap.set(value,index)
    }
    const traversal = (inorderMap,postorder,left,right)=>{
        const rootValue= postorder.pop()
        const root = new TreeNode(rootValue)
        const middle = inorderMap.get(rootValue)
        if(right > middle){
            root.right = traversal(inorderMap,postorder,middle+1,right)
        }
        if(left < middle){
            root.left = traversal(inorderMap,postorder,left,middle-1)
        }
        return root
    }
    return traversal(inorderMap,postorder,0,postorder.length-1)
};
