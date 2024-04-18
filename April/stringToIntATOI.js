var myAtoi = function (s) {
	//trim the string and split it into chars
	let sArray = s.trim().split("");
	let resArray = [];
	let start = 0;
	//edge case check
	if (sArray.length < 1) return 0;

	//check for '-' or '+'
	if (sArray[start] === "-" || sArray[start] === "+") {
		console.log("negative or positive sign found found");
		resArray.push(sArray[start]);
		start++;
	}
	console.log("sArray after neg splice: ", sArray);

	//read in next chars until a non digit char is found
	for (let i = start; i < sArray.length; i++) {
		let curr = sArray[i];
		console.log("curr: ", curr);

		if (!isNaN(curr) && curr !== " ") {
			console.log(`${curr} is a number!`);
			resArray.push(curr);
		} else {
			console.log(`${curr} is not a number!`);
			break;
		}
	}

	//convert the digits into one int
	resArray = Number(resArray.join(""));
	console.log("final result from number check: ", resArray);

	//clamp the integer to a 32-bit signed integer (within -2^31 to 2^31 + 1) and return the result
	if (resArray < Math.pow(-2, 31)) resArray = Math.pow(-2, 31);
	else if (resArray > Math.pow(2, 31) - 1) resArray = Math.pow(2, 31) - 1;
	else if (isNaN(resArray)) return 0;

	return resArray;
};
