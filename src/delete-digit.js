const { NotImplementedError } = require('../extensions/index.js');

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
  let deleteIndex = n.toString().length - 1;
  for (let i = 0; i < n.toString().length - 1; i++) {
    let digit = Number(n.toString()[i]);
    let nextDigit = Number(n.toString()[i + 1]);
    if (digit < nextDigit) {
      deleteIndex = i;
      break;
    }
  }
  return Number(
    n.toString().slice(0, deleteIndex) + n.toString().slice(deleteIndex + 1)
  );
}

module.exports = {
  deleteDigit,
};
