var lengthOfLongestSubstring = function (s) {
	// let longestLength = 0;
	// let currentLength = 0;
	// let longest = [];
	// let split = s.split("");

	// //loop through the string char by char
	// for (let i = 0; i < split.length; i++) {
	// 	console.log(
	// 		"======> !!!!! START OF NEW ITERATION: ",
	// 		"currentLength: ",
	// 		currentLength,
	// 		"longestLength: ",
	// 		longestLength,
	// 		"current group: ",
	// 		longest
	// 	);
	// 	//start by adding the first char to the longest array for comparisons
	// 	let curr = split[i];
	// 	longest.push(curr);
	// 	currentLength++;
	// 	console.log("first char added: ", curr, "current group: ", longest, "currentLength: ", currentLength);

	// 	//check for the longest length of the iterations as you go
	// 	if (longestLength < currentLength) {
	// 		longestLength = currentLength;
	// 		console.log("new longest length: ", longestLength, longest);
	// 	}

	// 	//loop through the rest of the string chars to find the longest non repeating
	// 	for (let j = i + 1; j < split.length; j++) {
	// 		let next = split[j];

	// 		//if the current string doesnt have the char then we can add it to the longest and up the highest count
	// 		if (!longest.includes(next)) {
	// 			console.log("char not found. adding next char to longest: ", next, longest);
	// 			longest.push(next);
	// 			currentLength++;
	// 			if (longestLength < currentLength) {
	// 				longestLength = currentLength;
	// 				console.log("new longest length: ", longestLength);
	// 			}
	// 			//if it does have the char then we need to reset the current count for the start of a new test
	// 		} else {
	// 			console.log("duplicate found: ", next, "resetting");
	// 			longest = [];
	// 			currentLength = 0;
	// 			console.log("should be reset: ", longest, currentLength);
	// 			break;
	// 		}
	// 	}
	// 	longest = [];
	// 	currentLength = 0;
	// }

	// return longestLength;
	let left = 0;
	let right = 0;
	let maxSubLength = 0;
	const hashSet = new Set();
	while (right < s.length) {
		if (!hashSet.has(s[right])) {
			hashSet.add(s[right]);
			maxSubLength = Math.max(maxSubLength, right + 1 - left);
			right++;
		} else {
			hashSet.delete(s[left]);
			left++;
		}
	}
	return maxSubLength;
};
