var sortColors = function(nums) {
  //loop through each possible color
    for (let i = 0; i <= 2; i++) {

      //if the number matches, push it to the end of the list
        for (let j = 0; j < nums.length; j++) {

            if (nums[j] === i) {
                nums.push(nums.splice(j, 1));
                j--;
            }
        }
    }
};
