const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  let heights = arr.filter((num) => num !== -1).sort((a, b) => a - b);
  let res = [];
  let next = 0;
  arr.forEach((element, i) => {
    if (element === -1) {
      res.push(element);
    } else {
      res.push(heights[next++]);
    }
  });
  return res;
}

module.exports = {
  sortByHeight,
};
