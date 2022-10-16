const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let allCases = [];
	let strNumber = n.toString();

	for (let i = 0; i < strNumber.length; i++) {
		let variant = strNumber
			.split("")
			.filter((strDigit, index) => index !== i)
			.join("");
		allCases.push(variant);
	}

	return Math.max(...allCases);
}

module.exports = {
	deleteDigit,
};
