const concat = require("goss_concat");

function rgb(a = 255, b = 255, c = 255) {
	if ([...arguments].some(param => param < 0 || param > 255)) {
		return "Error";
	}
	const result = [a, b, c].map(param => param.toString(16).padStart(2, "0"));
	return concat("#", result[0], result[1], result[2]);
}

console.log(rgb(25, 235, 32));
console.log(rgb(2, 3));
console.log(rgb(50));
console.log(rgb(5, -40, 0));
