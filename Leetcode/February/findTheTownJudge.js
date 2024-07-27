//
var findJudge = function (n, trust) {
	console.log("n: ", n);
	console.log("trust: ", trust);

	//create set list of all people in town
	let checklist = [];

	for (let i = 1; i <= n; i++) {
		console.log("current: ", i);
		checklist.push(i);
	}

	console.log("checklist: ", checklist);

	//iterate through trust array and remove trusting people from checklist
	for (let i = 0; i < trust.length; i++) {
		const current = trust[i];
		const truster = current[0];
		const trustee = current[1];
		console.log("current: ", current);
		console.log("truster: ", truster);
		console.log("trustee: ", trustee);

		if (checklist.includes(truster)) {
			console.log("removing truster: ", truster);
			let firstHalf = checklist.slice(trust[0], trust[i]);
			console.log("first half: ", firstHalf);
			let secondHalf = checklist.slice(trust[i], trust[trust.length - 1]);
			console.log("second half: ", secondHalf);

			//checklist = checklist.splice(trust[0], trust[i]).join(checklist.splice(trust[i+1], trust[trust.length-1]));
			console.log("after removal: ", checklist);
		}
	}

	console.log("final checklist: ", checklist);
	if (checklist.length) {
		const answer = checklist[0];
		console.log("answer ======> ", answer);
		return answer;
	} else return -1;
};
