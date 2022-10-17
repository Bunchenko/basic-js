const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	if (!date) return "Unable to determine the time of year!";
	if (!(date instanceof Date)) throw Error("Invalid date!");
	if (date.toString() == Date.prototype.toString.call(new Date())) throw Error("Invalid date!");

	let month = date.getMonth();

	let seasons = new Map();
	seasons
		.set([11, 0, 1], "winter")
		.set([2, 3, 4], "spring")
		.set([5, 6, 7], "summer")
		.set([8, 9, 10], "autumn");

	for (let [key, value] of seasons) {
		if (key.includes(month)) return value;
	}
}

module.exports = {
	getSeason,
};
