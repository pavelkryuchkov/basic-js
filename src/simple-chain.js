const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  length: 0,
  links: [],

  getLength() {
    return this.length;
  },

  addLink(value) {
    this.links.push(`( ${String(value)} )`);
    this.length++;
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.length) {
      this.links = [];
      this.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.links.splice(position - 1, 1);
    this.length--;
    return this;
  },

  reverseChain() {
    this.links.reverse();
    return this;
  },

  finishChain() {
    const res = this.links.join('~~');
    this.links = [];
    this.length = 0;
    return res;
  },
};

module.exports = {
  chainMaker,
};
