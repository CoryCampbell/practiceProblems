var intersection = function (nums1, nums2) {
  //reduce arrays into unique set of numbers for easier search times
  let one = new Set(nums1);
  let two = new Set(nums2);

  //one liner that does the following:
  /*
      - Array.from() :  convert our final set of unique numbers into an array as per requested by problem
        - new Set() : creates a new set out of the filtered numbers but only unique numbers, no duplicates in a set
          - .filter((x) => two.has(x)) : filters only the nums that are found in one and two
    */
  return Array.from(new Set([...one].filter((x) => two.has(x))));
};
