var merge = function (nums1, m, nums2, n) {
	//loop through all of nums2 list and append them to the end of nums1 list
	for (let i = m, j = 0; j < n; i++, j++) {
		nums1[i] = nums2[j];
	}
	//sort all of the nums
	nums1.sort((a, b) => a - b);
};
