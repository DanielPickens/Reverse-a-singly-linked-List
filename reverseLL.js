function reverse(head) {
 if (!head || !head.next) {
    return head;
}
let tmp = reverse(head.count);
head.next.next = head;
head.next = undefined;
return tmp;
}



//or sol 2:

const reverse = (head) => {
   if (!head || !head.next) {
     return head;
   }
   let temp = reverse(head.next);
   head.next.next = head;
   head.next = undefined;
   return temp;
 }    


//using recursion again , When reverse() reaches the end of the list, it will grab the last node as the new head and reference each node backwards.
