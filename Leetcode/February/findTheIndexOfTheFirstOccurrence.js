var strStr = function (haystack, needle) {
	for (let i = 0; i < haystack.length; i++) {
		const current = haystack.slice(i, needle.length + i);
		console.log("current: ", current);

		if (needle === current) {
			return i;
		}
	}
	return -1;
};
