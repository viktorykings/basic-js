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
  let arr = str.split('');
  let ref = new Set(arr)
  let number = []
  let letters = []
  let result = []
  let counter = 1;

  // ref.forEach(el => letters.push(el))
  for(let i = 1; i <= str.length; i++){
    if (str[i] === str[i-1]){
      counter++
    } else {
      number.push(counter)
      letters.push(str[i-1])
      counter = 1}
  }
  for (let i =0; i < number.length; i++){
    result.push(number[i])
    result.push(letters[i])
  }
  return result.join('').replace(/1/g, '')
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
