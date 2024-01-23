/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    head = new ListNode(0)
    curr = head
    while(l1 || l2 || carry >0){
        let sum = 0
        if(l1)
            sum = l1.val + sum, l1 = l1.next
        if(l2)
            sum = l2.val + sum, l2 = l2.next
        sum = sum + carry
        curr.next = new ListNode(sum%10)
        curr = curr.next
        carry = Math.floor(sum/10)
    }
    return head.next
};
