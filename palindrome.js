var isPalindrome = function (x) {
	let reversed = [];
	//take number and reverse it
	for (let i = 0; i < x.length; i++) {
		let current = x[i];
		console.log("current: ", current);
		reversed.push(current);
	}
	console.log(x);
	console.log(reversed);
	//compare reversed to original
	if (x === reversed) return true;
	else return false;
};
