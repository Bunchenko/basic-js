const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(/* arr */) {
	throw new NotImplementedError("Not implemented");
	// if (!Array.isArray(arr)) {
	// 	throw Error("'arr' parameter must be an instance of the Array!");
	// }
	// let controlSequences = {
	// 	"--discard-next": function (array, index) {
	// 		if (!array[index]) return;
	// 		array.splice(index, 1);
	// 	},
	// 	"--discard-prev": function (array, index) {
	// 		if (!array[index - 1]) return;
	// 		array.splice(index - 1, 1);
	// 	},
	// 	"--double-next": function (array, index) {
	// 		if (!array[index]) return;
	// 		array.splice(index, 1, array[index], array[index]);
	// 	},
	// 	"--double-prev": function (array, index) {
	// 		if (!array[index - 1]) return;
	// 		array.splice(index - 1, 1, array[index], array[index]);
	// 	},
	// };
	// let resultArr = arr.filter((item) => typeof item !== "string");
	// for (let i = 0; i < arr.length; i++) {
	// 	if (typeof arr[i] === "string" && controlSequences.hasOwnProperty(arr)) {
	// 		controlSequences[arr[i]](resultArr, i);
	// 	}
	// }
	// return resultArr;
}

module.exports = {
	transform,
};
