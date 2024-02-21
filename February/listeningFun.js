function getMaxFun(singer, length) {
	console.log("singer: ", singer);
	console.log("length: ", length);

	//normalize data:
	let normalized = [];
	let total = 0;
	let seen = 0;
	let rest = [];

	//normalize data
	for (let i = 0; i < singer.length; i++) {
		let current = [singer[i], length[i]];
		normalized.push(current);
	}

	normalized = normalized.sort();
	console.log("normalized list of songs: ", normalized);

	// first round
	let firstRound = [];
	let singersHeard = new Set();

	for (let i = 0; i < normalized.length; i++) {
		const currentPair = normalized[i];
		console.log("current pair: ", currentPair);
		const currentSinger = currentPair[0];
		console.log("current singer: ", currentSinger);

		if (!singersHeard.has(currentSinger)) {
			firstRound.push(currentPair);
			singersHeard.add(currentSinger);
		} else {
			rest.push(currentPair);
		}
	}
	console.log("first round set: ", firstRound);
	console.log("leftover rest: ", rest);

	firstRound = firstRound.sort();
	console.log("first round sorted: ", firstRound);

	for (let i = 0; i < firstRound.length; i++) {
		seen += 1;
		total += seen * firstRound[i][1];
	}

	//rest
	for (let i = 0; i < rest.length; i++) {
		total += seen * rest[i][1];
	}

	//RAN OUT OF TIME - NEED TO SORT BY LENGTH OF SONG FIRST TO ENSURE THAT MAXIMUM COMBOS ARE COMPLETED FIRST AND NOT OFF OF SINGER ORDER

	return total;
}
