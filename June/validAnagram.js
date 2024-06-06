var isAnagram = function (s, t) {
	//if our strings arent the same length then we know they are not anagrams
	if (s.length !== t.length) return false;

	//create a new map to store the amount of times a letter appears in our s string
	const lettersS = new Map();

	//loop through our s string and map out how many times each char is found
	for (let i = 0; i < s.length; i++) {
		let curr = s[i];

		//if our map doesnt have the char then we can add it and set its count to 1
		if (!lettersS.has(curr)) lettersS.set(curr, 1);
		else {
			//otherwise we can grab the value of that char already found and add one more to it then set the new value in the map
			let count = lettersS.get(curr);
			count++;
			lettersS.set(curr, count);
		}
	}

	//then we can loop through our second string and remove
	for (let j = 0; j < t.length; j++) {
		let currT = t[j];

		//if we find a char in the map we can remove one from the value
		if (lettersS.has(currT)) {
			let count = lettersS.get(currT);
			count--;
			//remove the entry completely if our cound is zero
			if (count === 0) {
				lettersS.delete(currT);
			} else {
				lettersS.set(currT, count);
			}
			//otherwise we can return false because we found a char that doesnt exist in the first string
		} else return false;
	}

	//ternary to return the boolean depending on if there is anything left in our map
	return lettersS.size === 0 ? true : false;
};
