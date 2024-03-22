var generate = function (numRows) {
	//setup result array to populate
	let result = [];

	//edge case check
	if (numRows === 0) return result;

	//first row is always just one
	result.push([1]);

	//iterate the amount of rows in the triangle starting with the second row
	for (let i = 1; i < numRows; i++) {
		let prevRow = result[i - 1];
		//each row starts with one and ends with one
		let newRow = [1];

		//iterate through the previous row and add the new sum to the new row
		for (let j = 1; j < prevRow.length; j++) {
			newRow.push(prevRow[j - 1] + prevRow[j]);
		}

		//append the final one
		newRow.push(1);

		//push the completed row to the result array
		result.push(newRow);
	}

	return result;
};
