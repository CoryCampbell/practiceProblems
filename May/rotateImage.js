var rotate = function (matrix) {
  //used to determine other variables
	let n = matrix.length;
  //determines how deep the matrix is from any given side
	let depth = Math.floor(n / 2);

  //each iteration represents a ring around the matrix, start at the edges and going inwards
	for (let i = 0; i < depth; i++) {
    //the length each iteration will be reduced by -2 each iteration
		let len = n - 2 * i - 1;
    //saving the opp value for faster computation
		let opp = n - 1 - i;

    //inner loop for the actual swapping of 4 elements per round
		for (let j = 0; j < len; j++) {
			let temp = matrix[i][i + j];
			matrix[i][i + j] = matrix[opp - j][i];
			matrix[opp - j][i] = matrix[opp][opp - j];
			matrix[opp][opp - j] = matrix[i + j][opp];
			matrix[i + j][opp] = temp;
		}
	}
};
