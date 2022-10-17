const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value ) {
      this.chain.push(`( ${value} )`)
    return this
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(typeof position === 'number' && Number.isInteger(position)){
      if (position < 1 || position > this.getLength()){
        this.chain.length = 0
        throw new Error (`You can't remove incorrect link!`)
      }
      let i = position - 1;
      this.chain.splice(i,1)
      return this
    } else {
      this.chain.length = 0
      throw new Error (`You can't remove incorrect link!`)
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse()
    return this
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let chains = this.chain.join('~~')
    this.chain.length = 0
    return chains
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
