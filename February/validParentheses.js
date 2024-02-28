var isValid = function (s) {
	/*

    () - ! works

    {} - ! works

    [] - ! works

    (){}[] - ! works

    {{[]}} - ! doesn't pass

    */

	let valid = true;

	for (let i = 0; i < s.length - 1; i++) {
		let current = s[i];
		let last = s[i + 1];
		console.log("current: ", current);
		console.log("last: ", last);

		if (current === "{" && last !== "}") valid = false;
		if (current === "[" && last !== "]") valid = false;
		if (current === "(" && last !== ")") valid = false;
	}

	return valid;
};
