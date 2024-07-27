var longestCommonPrefix = function (strs) {
	const copy = strs;
	copy.sort();

	for (let i = 0; i < copy[0].length; i++) {
		if (copy[0][i] !== copy[copy.length - 1][i]) {
			return copy[0].substr(0, i);
		}
	}

	return copy[0];
};
