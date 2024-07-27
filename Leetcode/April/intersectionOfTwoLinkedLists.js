var getIntersectionNode = function (headA, headB) {
	let a = headA;
	let b = headB;

	while (a !== b) {
		//ternary that traverses the list and changes the value of a until it reaches the end of the list and then tranisitings to the other list
		//this causes the syncronization of the lists by stacking the A + B, against B + A
		// which we need to do to normalize the lengths of lists to find where they truly sync up
		// once the values of a and b are the same the intersections have been found

		//this also solves the problem in O(1) space instead of O(n) space
		a = !a ? headB : a.next;
		b = !b ? headA : b.next;
	}
	return a;
};
