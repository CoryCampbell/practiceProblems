var isPalindrome = function (x) {
	const original = x.toString();
	let result = true;

	let reversed = original.split("").reverse().join("");

	if (reversed !== original) result = false;

	return result;
};
