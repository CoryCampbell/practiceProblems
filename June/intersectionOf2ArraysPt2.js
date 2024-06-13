var intersect = function (nums1, nums2) {
  //find which array is shorter for comparisons
	let shortest = nums1.length < nums2.length ? nums1 : nums2;
	let longest = nums1.length < nums2.length ? nums2 : nums1;
	let result = [];

  //iterate each number in the shorter array and remove it from the longer array if found and add it to result
	while (shortest.length > 0) {
		let curr = shortest.splice(0, 1)[0];

		if (longest.includes(curr)) {
			longest.splice(longest.indexOf(curr), 1);
			result.push(curr);
		}
	}

	return result;
};
