var removeNthFromEnd = function (head, n) {
	//we need to know the .next of the node being removed
	//then we need to change the .next of the previous node to point to the .next we got from the nth node
	const dummy = new ListNode(0);
	dummy.next = head;
	let first = dummy;
	let second = dummy;

	//traverse the list setting the first node to the nth value of traversal
	for (let i = 0; i <= n; i++) {
		first = first.next;
	}

	//while our first node isnt null, we can traverse both first and second
	//until we reach the end of the list
	while (first !== null) {
		first = first.next;
		second = second.next;
	}

	//at this point our second pointer is at one before the nth from the last postion so we can skip the nth position
	second.next = second.next.next;

	return dummy.next;
};
