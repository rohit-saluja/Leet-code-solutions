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
    const list = []
    const reverse = (i,j)=>{
        while(i<j){
            [list[i],list[j]] = [list[j],list[i]]
            i = i + 1
            j = j - 1
        }
    }
    let curr = head
    while(curr){
        list.push(curr.val)
        curr = curr.next
    }
    k = k % list.length
    reverse(0,list.length-1)
    reverse(0,k-1)
    reverse(k,list.length-1)
    head = new ListNode(0)
    curr = head
    let i = 0
    while(i < list.length){
        curr.next = new ListNode(list[i])
        curr = curr.next
        i = i + 1
    }
    return head.next
};
