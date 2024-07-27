var reverseString = function (s) {
	//create some variables for solution
	//this is all O(1) space complexity
	let temp;
	let length = s.length - 1;
	let mid = Math.floor(s.length / 2);
	let position = 0;

	//while our position is less than the mid point we can swap the values of our array in place using a temp value
	while (position < mid) {
		let first = s[position];
		let last = s[length];
		temp = first;
		s[position] = last;
		s[length] = temp;
		position++;
		length--;
	}

	return s;
};
