/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const before = new ListNode(0)
    const after = new ListNode(0)
    let afterCurr = after
    let beforeCurr = before
    let curr = head
    while(curr){
        if(x > curr.val){
            beforeCurr.next = curr
            beforeCurr = beforeCurr.next
        }else {
            afterCurr.next = curr
            afterCurr = afterCurr.next
        }
        curr = curr.next
    }
    
    afterCurr.next = null
    beforeCurr.next = after.next
    return before.next
};
