const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

function isMAC48Address(n) {
  let arr = n.split('-');
  let digits = Array.from('0123456789ABCDEF');
  if (arr.length !== 6) return false;
  for (let str of arr) {
    if (str.length !== 2) return false;
    if (!(digits.includes(str[0]) && digits.includes(str[1]))) return false;
  }
  return true;
}

module.exports = {
  isMAC48Address,
};
