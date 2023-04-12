const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const alpha = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    message = message.toUpperCase();
    key = key.toUpperCase();

    let res = '';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const keyChar = key[keyIndex % key.length];
      const shift = alpha.indexOf(keyChar);

      if (alpha.includes(char)) {
        let charIndex = (alpha.indexOf(char) + shift) % alpha.length;
        res += alpha[charIndex];
        keyIndex++;
      } else {
        res += char;
      }
    }
    return this.direct ? res : res.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const alpha = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    key = key.toUpperCase();
    key = Array.from(key)
      .map((char) => {
        let index = alpha.indexOf(char);
        return alpha[(alpha.length - index) % alpha.length];
      })
      .join('');

    return this.encrypt(message, key);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
