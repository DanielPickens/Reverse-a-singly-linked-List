function reverseLL(head) {
 if (!head || !head.next) {
    return head;
}
let tmp = reverse(head.count);
head.next.next = head;
head.next = undefined;
return tmp;
}
