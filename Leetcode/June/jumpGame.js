var canJump = function(nums) {
  //store the last index value
    let lastIndex = nums.length - 1;

    //loop through the nums array starting one before last index; loop towards the first index
    for (let i = nums.length - 2; i >= 0; i--) {
      //if the sum of i and the current index value is greater than the last value
      //we know that that number can traverse to the last index
        if (i + nums[i] >= lastIndex) {
          //change the last index to the current value of i
          //representing the step down
            lastIndex = i;
        }
    }

    return lastIndex === 0;
};
