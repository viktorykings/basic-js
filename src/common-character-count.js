const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  // let s1Arr = s1.split('')
  // let s2Arr = s2.split('')
  // let numFirst = []
  // let lettersFirst = []
  // let numSecond = []
  // let lettersSecond = []
  // for(let i = 1; i <= s1.length; i++){
  //   let counter = 1;
  //   if (s1[i] === s1[i-1]){
  //     counter++
  //   } else {
  //     numFirst.push(counter)
  //     lettersFirst.push(s1[i-1])
  //   }
  // }
  // for(let i = 1; i <= s2.length; i++){
  //   let counter = 1;
  //   if (s2[i] === s2[i-1]){
  //     counter++
  //   } else {
  //     numSecond.push(counter)
  //     lettersSecond.push(s2[i-1])
  //   }
  // }
  // for (let i =0; i < number.length; i++){
  //   result.push(number[i])
  //   result.push(letters[i])
  // }
  //   for (let i =0; i < numFirst.length; i++){
  /* console.log(lettersFirst[i]) */
  // const arr = numFirst[i].concat(lettersFirst[i])
  // console.log(el) 
    /* res1.push(el) */
    /* res1.push(lettersFirst[i]) */
  // }
 /*  console.log(res1)
   console.log(lettersFirst)
    console.log(numSecond)
     console.log(lettersSecond) */
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
