let arr = [1, 2, 3, 4];

function demoTestingFunction(x, y) {
	let curr = arr[0];
	console.log("curr: ", curr);

	for (let i = 1; i < arr.length; i++) {
		console.log("i: ", i);
	}
}

function demoTestingFunction2(x, y) {
	let curr = arr[0];
	console.log("curr: ", curr);

	for (let i = 1; i < arr.length; i++) {
		console.log("i: ", i);
	}
}

const demoObject = {
	"1": "!!!hello",
	"2": "!!!world",
	"3": "!!!hello world",
	"4": "!!!demo",
	"5": "!!!user",
	"6": "!!!whatever"
};


class Car {
	constructor(make, model, year) {
		this.make = make
		this.model = model
		this.year = year
	}
}
