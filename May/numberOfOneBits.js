var hammingWeight = function (n) {
  //normalize the data
	let chunk = n.toString(2);

  //start a count to return
  let count = 0;

  //loop through every digit of our normalized data
	for (let i = 0; i < chunk.length; i++) {
		if (chunk[i] === "1") count++;
	}

	return count;
};
