var groupAnagrams = function (strs) {
  //create a new map for storing anagram groups and how many words in each group
	const mp = new Map();
  //create final ans array
	const ans = [];

  //loop through each str in our argument strs array
	for (const str of strs) {
    //take the word and normalize it for comparisons
		const sortedStr = str.split("").sort().join("");
    //if our map has this sortedStr, we know that the str belongs in this group
		if (mp.has(sortedStr)) {
			ans[mp.get(sortedStr)].push(str);
    //otherwise we create a new kvp pair insid our map to represent a new anagram group
		} else {
			mp.set(sortedStr, ans.length);
			ans.push([str]);
		}
	}
  
	return ans;
};
