var isPalindrome = function (s) {
	//normalize data
	//remove any non alphanumeric
	//lowercase chars
	s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

	//check
	if (s.split("").reverse().join("") !== s) return false;
	else return true;
};
