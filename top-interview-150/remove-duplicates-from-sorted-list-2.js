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
    const map = new Map()
    let curr  = head
    
    while(curr){
        if(map.has(curr.val)){
            map.set(curr.val,map.get(curr.val) + 1)
        }else map.set(curr.val,1)
        curr = curr.next
    }
    const result = Array.from(map.entries()).filter(([index,value])=>value === 1).map(value=>value[0])
    head = new ListNode(0)
    curr = head
    let i=0
    while(i< result.length){
        curr.next = new ListNode(result[i])
        curr = curr.next
        i = i + 1
    }
    return head.next
};
