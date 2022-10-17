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
function repeater(str, options ) {
//   let targetLength = []

//   for (let val in options){
//     targetLength.push(obj[val])
//   }
// str.padEnd()
function createStr(str, separator, repTimes){
  let newStr = Array(repTimes).fill(str, 0).join(separator);
  return newStr
}
const add = options.addition !== undefined
        ? createStr(String(options.addition), options.additionSeparator || '|', options.additionRepeatTimes) 
        : '';
return createStr(`${str}${add}`, options.separator || '+', options.repeatTimes);

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
