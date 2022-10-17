const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let resultStr = "";

	options.repeatTimes = options.repeatTimes || 1;
	if (!options.addition && options.addition !== undefined) {
		options.addition = String(options.addition);
	}
	options.additionRepeatTimes = options.additionRepeatTimes || 1;

	for (let i = 0; i < options.repeatTimes; i++) {
		resultStr += `${str}`;
		if (options.addition) {
			for (let j = 0; j < options.additionRepeatTimes; j++) {
				resultStr += `${options.addition}`;
				if (options.additionRepeatTimes - j !== 1) {
					resultStr += `${options.additionSeparator || "|"}`;
				}
			}
		}

		if (options.repeatTimes - i !== 1) {
			resultStr += `${options.separator || "+"}`;
		}
	}

	return resultStr;
}

module.exports = {
	repeater,
};
