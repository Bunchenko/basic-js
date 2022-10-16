const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		let max = 0;
		let depth = 0;
		arr.forEach((element) => {
			if (Array.isArray(element)) {
				depth = this.calculateDepth(element);
				if (depth > max) {
					max = depth;
				}
			}
		});
		// Depth of this array is the depth of the largest sub-array + 1
		return max + 1;
	}
}

module.exports = {
	DepthCalculator,
};
