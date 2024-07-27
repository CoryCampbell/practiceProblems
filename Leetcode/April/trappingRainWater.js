var trap = function (height) {
	// 	let left;
	// 	let right = 0;
	// 	//find outer edges of layer
	// 	for (let i = 0; i < height.length; i++) {
	// 		let curr = height[i];
	// 		//finds left
	// 		if (left === undefined && curr > 0) {
	// 			left = i;
	// 		}
	// 		//finds right
	// 		if (right < i && curr > 0) {
	// 			right = i;
	// 		}
	// 	}
	// 	return [left, right];
	// };
	// var countHoles = function (height, left, right) {
	// 	let count = 0;
	// 	//count gaps inbetween
	// 	for (let i = 0; i < height.length; i++) {
	// 		let curr = height[i];
	// 		//count empty spaces between left and right
	// 		if (i > left && i < right && curr === 0) {
	// 			count++;
	// 		}
	// 	}
	// 	return count;
	// };
	// var trimHeight = function (height, left, right) {
	// 	//lower the values of all numbers by 1 to represent the next level
	// 	for (let i = 0; i < height.length; i++) {
	// 		let curr = height[i];
	// 		if (curr > 0) {
	// 			height[i] = curr - 1;
	// 		}
	// 	}
	// 	left = findEdges(height)[0];
	// 	right = findEdges(height)[1];
	// 	for (let i = 0; i < height.length; i++) {
	// 		let curr = height[i];
	// 		//remove outliers that represent unecessary data outside parameters
	// 		if (curr === 0 && i < left) {
	// 			height.splice(i, i + 1);
	// 			i--;
	// 			left--;
	// 			right--;
	// 		} else if (curr === 0 && i > right) {
	// 			height.splice(i, i + 1);
	// 			i--;
	// 		}
	// 	}
	// 	return [height, left, right];
	// };
	// var trap = function (height) {
	// 	let count = 0;
	// 	let [left, right] = findEdges(height);
	// 	while (height.length > 1) {
	// 		if (height[left] === 0 || height[right] === 0) return count;
	// 		count += countHoles(height, left, right);
	// 		console.log("count after row: ", count);
	// 		[height, left, right] = trimHeight(height, left, right);
	// 	}
	// 	return count;

		let sum = 0;

		let i = 0;
		let j = height.length - 1;

		let leftMax = height[i];
		let rightMax = height[j];

		while (i < j) {
			if (leftMax <= rightMax) {
				sum += leftMax - height[i];
				i++;
				leftMax = Math.max(leftMax, height[i]);
			} else {
				sum += rightMax - height[j];
				j--;
				rightMax = Math.max(rightMax, height[j]);
			}
		}

		return sum;
};
