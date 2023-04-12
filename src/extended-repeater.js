const { NotImplementedError } = require('../extensions/index.js');

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
  str = String(str);
  const addition = 'addition' in options ? String(options.addition) : '';

  const repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 1;
  const additionRepeatTimes =
    'additionRepeatTimes' in options ? options.additionRepeatTimes : 1;

  const separator = 'separator' in options ? options.separator : '+';
  const additionSeparator =
    'additionSeparator' in options ? options.additionSeparator : '|';

  let res = '';
  str += Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  res += Array(repeatTimes).fill(str).join(separator);
  return res;
}

module.exports = {
  repeater,
};
