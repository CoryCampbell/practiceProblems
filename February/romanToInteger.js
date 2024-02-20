var romanToInt = function (s) {
	let copy = s;

	let split = [];
	let total = 0;

	while (copy.length) {
		let pair = false;

		//split up roman
		if ([copy[0], copy[1]].toString() == ["I", "V"].toString()) {
			split.push(4);
			pair = true;
		} else if ([copy[0], copy[1]].toString() == ["I", "X"].toString()) {
			split.push(9);
			pair = true;
		} else if ([copy[0], copy[1]].toString() == ["X", "L"].toString()) {
			split.push(40);
			pair = true;
		} else if ([copy[0], copy[1]].toString() == ["X", "C"].toString()) {
			split.push(90);
			pair = true;
		} else if ([copy[0], copy[1]].toString() == ["C", "D"].toString()) {
			split.push(400);
			pair = true;
		} else if ([copy[0], copy[1]].toString() == ["C", "M"].toString()) {
			split.push(900);
			pair = true;
		} else {
			let single;
			const test = copy[0];
			if (test === "I") single = 1;
			if (test === "V") single = 5;
			if (test === "X") single = 10;
			if (test === "L") single = 50;
			if (test === "C") single = 100;
			if (test === "D") single = 500;
			if (test === "M") single = 1000;
			split.push(single);
			copy = copy.slice(1);
		}

		if (pair === true) {
			copy = copy.slice(2);
		}
	}

	split.forEach((number) => {
		total += number;
	});

	return total;
};
//monday
var romanToInt = function (s) {
	let copy = s;

	let split = [];
	let total = 0;

	while (copy.length) {
		let pair = false;

		//split up roman
		if ([copy[0], copy[1]].toString() == ["I", "V"].toString()) {
			split.push(4);
			pair = true;
		} else if ([copy[0], copy[1]].toString() == ["I", "X"].toString()) {
			split.push(9);
			pair = true;
		} else if ([copy[0], copy[1]].toString() == ["X", "L"].toString()) {
			split.push(40);
			pair = true;
		} else if ([copy[0], copy[1]].toString() == ["X", "C"].toString()) {
			split.push(90);
			pair = true;
		} else if ([copy[0], copy[1]].toString() == ["C", "D"].toString()) {
			split.push(400);
			pair = true;
		} else if ([copy[0], copy[1]].toString() == ["C", "M"].toString()) {
			split.push(900);
			pair = true;
		} else {
			let single;
			const test = copy[0];
			if (test === "I") single = 1;
			if (test === "V") single = 5;
			if (test === "X") single = 10;
			if (test === "L") single = 50;
			if (test === "C") single = 100;
			if (test === "D") single = 500;
			if (test === "M") single = 1000;
			split.push(single);
			copy = copy.slice(1);
		}

		if (pair === true) {
			copy = copy.slice(2);
		}
	}

	split.forEach((number) => {
		total += number;
	});

	return total;
};
