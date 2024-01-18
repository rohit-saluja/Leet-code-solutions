/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(0)
    curr = head
    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = new ListNode(list1.val)
            curr = curr.next
            list1 = list1.next
        }else{
            curr.next = new ListNode(list2.val)
            curr = curr.next
            list2 = list2.next
        }
    }
    while(list1){
        curr.next = new ListNode(list1.val)
        curr = curr.next
        list1 = list1.next
    }
    while(list2){
        curr.next = new ListNode(list2.val)
        curr = curr.next
        list2 = list2.next
    }
    return head.next
};
