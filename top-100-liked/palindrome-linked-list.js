/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    slow.next = reverse(slow.next)
    slow = slow.next
    curr = head
    while(slow){
        if(slow.val !== curr.val) return false
        slow = slow.next
        curr=curr.next
    }
    return  true
};

const reverse = (curr)=>{
    let prev = null
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

