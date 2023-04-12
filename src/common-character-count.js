const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let map1 = {};
  let res = 0;
  for (let char of s1) {
    map1[char] = map1[char] ? map1[char] + 1 : 1;
  }
  for (let char of s2) {
    if (map1[char]) {
      res++;
      map1[char]--;
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
