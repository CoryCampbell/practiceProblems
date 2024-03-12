var deleteDuplicates = function (head) {
	let curr = head;

	while (curr != null && curr.next != null) {
		if (curr.val == curr.next.val) {
			curr.next = curr.next.next;
		} else {
			curr = curr.next;
		}
	}
	return head;
};
// Time: O(n) - must traverse through length of list to check for duplicates
// Space O(1) - uses pointers in place to remove duplicates
