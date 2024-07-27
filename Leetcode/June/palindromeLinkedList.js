var isPalindrome = function (head) {
	//create an array for easier comparisons
	const listVals = [];

	//while we are traversing our listNode
	while (head) {
		//push the val of current head to our array
		listVals.push(head.val);

		//traverse our list
		head = head.next;
	}

	//set up two pointers
	let left = 0;
	let right = listVals.length - 1;

	//compare our pointers and traverse closer to each other if they are equal
	while (left < right && listVals[left] === listVals[right]) {
		left++;
		right--;
	}

	//return how far left got, representing if the linkedList is a palindrome or not
	return left >= right;
};
