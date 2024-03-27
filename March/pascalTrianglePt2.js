var getRow = function (rowIndex) {
	let triangle = [[1]];

	if (!rowIndex) return triangle;

	for (let i = 1; i < rowIndex + 1; i++) {
		let last = triangle[i - 1];
		let curr = [1];

		for (let j = 1; j < last.length; j++) {
			curr.push(last[j - 1] + last[j]);
		}

		curr.push(1);
		triangle.push(curr);
	}

	return triangle[rowIndex];
};
