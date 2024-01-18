/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists.length)
        return null

    const mergeList = (a,b)=>{
        head = new ListNode(0)
        curr = head
        while(a && b){
            if(a.val < b.val){
                curr.next = new ListNode(a.val)
                curr = curr.next
                a = a.next
            }else{
                curr.next = new ListNode(b.val)
                curr = curr.next
                b = b.next
            }
        }
        while(a){
            curr.next = new ListNode(a.val)
            curr = curr.next
            a = a.next
        }
        while(b){
            curr.next = new ListNode(b.val)
            curr = curr.next
            b = b.next
        }
        return head.next
    }

    while(lists.length > 1){
        const a = lists.shift()
        const b = lists.shift()
        const h = mergeList(a,b)
        lists.push(h)
    }
    return lists[0]
};
