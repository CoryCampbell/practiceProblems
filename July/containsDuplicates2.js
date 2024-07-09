var containsNearbyDuplicate = function(nums, k) {

  //create a new Map to store nums and check for duplicates
    const hash = new Map();

    //loop through the nums Array
    for (let i = 0; i < nums.length; i++) {
    //this line will only return true if our hash Map has a duplicate of the value already found in our Map And it passes our index check value "K"
        if (i - hash.get(nums[i]) <= k) return true;
        //otherwise we set the current index value into the Map for later access and check
        hash.set(nums[i], i);
    }
    //if we reach the end of the loop we can return false since no combos passed the check
    return false;
};
