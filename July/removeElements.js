var removeElements = function(head, val) {
    //edge case for empty list
    if (!head) return head;

    //edge case for removal of val at start of lists
    while (head) {
        if (head.val === val) {
            head = head.next;
        } else break;
    }

    //set curr val to head
    let curr = head;

    //while we have a curr val AND a next val iterate
    while (curr && curr.next) {
      //if our next val is target val then we skip it by setting the next val to the next.next val
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};
