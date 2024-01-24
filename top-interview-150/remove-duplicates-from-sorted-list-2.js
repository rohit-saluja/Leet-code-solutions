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
var deleteDuplicates = function(head) {
    if(!head || !head.next)
        return head
    const fake = new ListNode(0)
    curr = fake
    fake.next = head
    while(curr.next && curr.next.next){
        if(curr.next.val === curr.next.next.val){
            let duplicate = curr.next.val
            while(curr.next && curr.next.val === duplicate){
                curr.next = curr.next.next
            }
        }else curr = curr.next
    }
    return fake.next
};
