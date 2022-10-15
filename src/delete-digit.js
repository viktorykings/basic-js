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
  let arr = []
  let newArr = []
  let numStr = n.toString();
  for (let i = 0; i <= numStr.length - 1; i++){
    arr.push(numStr.replace(numStr[i], ''))
  }
  arr.forEach(el => {
    newArr.push(parseInt(el))
  }
  )
  newArr.sort((a,b) => a - b)
  return newArr[newArr.length - 1]



  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
