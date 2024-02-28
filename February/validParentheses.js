var isValid = function (s) {
	if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;
	if (s.length % 2 !== 0) return false;
	if (s[s.length - 1] === "(" || s[s.length - 1] === "{" || s[s.length - 1] === "[") return false;
	/*

    () - ! works

    {} - ! works

    [] - ! works

    (){}[] - ! works

    {{[]}} - ! doesn't pass

    */

	//check for nested

	//doenst solve nested parentheses
	for (let i = 0; i < s.length - 1; i++) {
		let current = s[i];
		let last = s[i + 1];
		console.log("current: ", current);
		console.log("last: ", last);

		if (current === "{" && last !== "}") return false;
		if (current === "[" && last !== "]") return false;
		if (current === "(" && last !== ")") return false;
	}

	return true;
};
