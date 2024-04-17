var reverse = function (x) {
	if (x < 0) {
		let xSplit = x.toString().split("");
		xSplit = xSplit.splice(1, xSplit.length).reverse().join("");
		let res = "-".concat(xSplit);

		if (res < Math.pow(-2, 31)) return 0;
		else return res;
	}

	let posRes = x.toString().split("").reverse().join("");
	if (posRes > Math.pow(2, 31) - 1) return 0;
	else return posRes;
};
