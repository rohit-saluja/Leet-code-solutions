/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    const nums = []
    let curr = head
    while(curr){
        nums.push(curr.val)
        curr = curr.next
    }
    nums.sort((a,b)=>a-b)
    let result = new ListNode(0)
    curr = result
    for(const num of nums){
        curr.next = new ListNode(num)
        curr = curr.next
    }
    return result.next
};
