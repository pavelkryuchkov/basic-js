const { NotImplementedError } = require('../extensions/index.js');

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
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  if (date instanceof Date) {
    try {
      date.valueOf();
    } catch {
      throw new Error('Invalid date!');
    }
    const month = date.getMonth();
    const index = Math.floor(((month + 1) % 12) / 3);
    return seasons[index];
  } else if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  throw new Error('Invalid date!');
}

module.exports = {
  getSeason,
};
