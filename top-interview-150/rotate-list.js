/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head
    let count = 0
    let curr = head
    
    while(curr){
        count = count + 1
        curr = curr.next
    }
    k=k%count

    let prev = head
    curr = head
    while(k>0){
        curr = curr.next
        k=k-1
    }
    while(curr.next){
        curr = curr.next
        prev = prev.next
    }

    curr.next = head
    head = prev.next
    prev.next = null
    
    return head
};
