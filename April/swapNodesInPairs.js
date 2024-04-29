var swapPairs = function (head) {
	//if head is null or head.next is null then there is no swapping necessary
	if (head === null) return null;
	if (head.next === null) return head;

	//create a new head to start the conversions and for return
	let newHead = head.next;
	let curr = head;
	let prev = null;

	while (curr !== null && curr.next !== null) {
		//temp is used for next iteration
		let temp = curr.next.next;

		//set the next.next value to the current value
		curr.next.next = curr;

		//set prev after first iteration
		if (prev === null) {
			prev = curr;
			//set prev values after first iteration
		} else {
			prev.next = curr.next;
			prev = curr;
		}

		//set our next value to our temp value set earlier
		curr.next = temp;
		//set the curr value to the next value in list
		curr = curr.next;
	}

	//return the final answer
	return newHead;
};
