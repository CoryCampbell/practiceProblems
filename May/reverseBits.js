var reverseBits = function (n) {
	//get the reversed value of our number
	let reversedBit = n.toString(2).split("").reverse().join("");

	//adds back any zeros that were lost in conversion
	while (32 > reversedBit.length) {
		reversedBit = reversedBit.concat("0");
	}

	//return the value in decimal form
	return parseInt(reversedBit, 2);
};
