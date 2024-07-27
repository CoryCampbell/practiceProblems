var countAndSay = function (n) {
	//start with a say of '1';
	let say = "1";

	//if our say === 1 then we can return 1;
	while (n > 1) {
		//start with a count of zero for the amount of times we find a repeated number
		let count = 0;
		//this will be where we store our next version of say after one iteration
		let next = "";
		//this loop will find if we have a repeated number
		for (let i = 0; i <= say.length; i++) {
			//if our index is the length of our say OR index is greater than zero AND that index of say doesnt exqual the previous index of say
			if (i === say.length || (i > 0 && say[i] !== say[i - 1])) {
				//next turns into how many times our number was found PLUS the first time that number was found
				next += count + say[i - 1];
				//reset our count for next iteration
				count = 0;
			}
			//count up to track the amount of times number is found
			count++;
		}
		//say turns into the value of our next value
		say = next;
		//remove 1 from our n argument
		n--;
	}

	//finally return the final result of say
	return say;
};
