var reverseList = function (head) {
	//start with null as our node, this will represent the end of our list; and what we point to after each iteration
	let node = null;

	//while we have a head node we will do the following:
	while (head) {
		//create a temp value to store the head.next value we are changing
		//this temp value is what makes this whole algorithm work smoothly because its where we disconnect our nodes during our iterations
		const temp = head.next;

		//update the head.next value to be the value we have collected in our node variable so far
		head.next = node;

		//update our node value to include our latest updates from this iteration
		node = head;

		//update the value of our head to be our temp value which we stored at the beginning of this iteration
		head = temp;
	}

	//finally return our node value which is the reverse of our original linked list
	return node;
};
