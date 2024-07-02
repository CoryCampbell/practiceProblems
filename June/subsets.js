var subsets = function(nums) {
    // Initialize subsets with an empty set
    let subsets = new Set();
    let subsetsArr = [[]]; // Start with the empty subset

    // Iterate through each number in nums
    for (let num of nums) {
        // For each existing subset, add the new number to create a new subset
        let newSubsets = subsetsArr.map(subset => {
            let newSubset = subset.slice(); // Create a copy of the current subset
            newSubset.push(num); // Add the current number to the new subset
            return newSubset;
        });

        // Add the new subsets to the existing ones
        subsetsArr = subsetsArr.concat(newSubsets);
    }

    // Convert the array of arrays into a set of strings to ensure uniqueness
    subsetsArr.forEach(subset => {
        subsets.add(JSON.stringify(subset));
    });

    // Convert the set of strings back to an array of arrays
    let uniqueSubsetsArr = Array.from(subsets).map(subset => JSON.parse(subset));

    return uniqueSubsetsArr;
};
