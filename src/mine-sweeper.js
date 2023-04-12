const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function checkNeighbors(i, j, matrix) {
  let res = 0;
  if (matrix[i - 1]) {
    for (let shift of [-1, 0, 1]) {
      if (matrix[i - 1][j + shift]) {
        res++;
      }
    }
  }
  if (matrix[i + 1]) {
    for (let shift of [-1, 0, 1]) {
      if (matrix[i + 1][j + shift]) {
        res++;
      }
    }
  }
  for (let shift of [-1, 1]) {
    if (matrix[i][j + shift]) {
      res++;
    }
  }
  return res;
}

function minesweeper(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[0].length; j++) {
      row.push(checkNeighbors(i, j, matrix));
    }
    res.push(row);
  }
  return res;
}

module.exports = {
  minesweeper,
};
