var firstUniqChar = function (s) {
  //if our string doesn't have a length then we know theres neither duplicates or unique chars
	if (!s || s.length === 0) return -1;

  //loop through the length of our string
	for (let i = 0; i < s.length; i++) {
    //if our char index matches our last index of char then we know its unique
		const char = s[i];
		if (s.indexOf(char) === s.lastIndexOf(char)) return i;
	}

	return -1;
};
