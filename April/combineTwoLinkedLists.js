var addTwoNumbers = function (l1, l2) {
	// //get first num
	// let a = [];
	// let curr1 = l1;
	// while (curr1) {
	//     a.push(curr1.val);
	//     curr1 = curr1.next;
	// }
	// a = a.reverse().join('');
	// console.log("a: ", a);

	// //get second num
	// let b = [];
	// let curr2 = l2;
	// while (curr2) {
	//     b.push(curr2.val);
	//     curr2 = curr2.next;
	// }
	// b = b.reverse().join('')
	// console.log("b: ", b);

	// //combine them
	// let res = a*1 + b*1;
	// console.log("res: ", res);

	// //convert to new linked list and return
	// let combo = [];
	// res.toString().split('').forEach((digit) => {
	//     combo.push(Number(digit));
	// })
	// combo = combo.reverse();

	// let result = new ListNode(combo[0]);
	// let curr = result;

	// for (let i = 1; i < combo.length; i++) {
	//     curr.next = new ListNode(combo[i]);
	//     curr = curr.next;
	// }

	// return result;

	let carry = 0;
	let result = new ListNode(0);
	let current = result;

	while (l1 || l2 || carry) {
		let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
		carry = Math.floor(sum / 10);
		current.next = new ListNode(sum % 10);
		current = current.next;

		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}

	return result.next;
};
