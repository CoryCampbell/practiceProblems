var titleToNumber = function (columnTitle) {
	let res = 0;
	let length = columnTitle.length;

	for (let i = 0; i < length; i++) {
		res += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - (i + 1));
	}

	return res;
};
