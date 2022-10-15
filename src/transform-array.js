const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  // let result = [];
  // let rules = {
  //   '--discard-next': i++,
  //   '--discard-prev': result.pop(),
  //   '--double-next' : result.push(arr[i+1]),
  //   '--double-prev' : result.push(arr[i-1])
  // }
  // arr.forEach(el=> {
  //   if(typeof el === 'string'){
  //     for (let key in rules){
  //       if (el === key){
  //         rules[key]
  //       }
  //     }
  //   } else result.push(el)
  // })
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
