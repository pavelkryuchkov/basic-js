const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let res = [];
  for (let char of str) {
    if (res[res.length - 1] === char) {
      res[res.length - 2]++;
    } else {
      res.push(1);
      res.push(char);
    }
  }
  return res.filter((element) => element != 1).join('');
}

module.exports = {
  encodeLine,
};
