const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  let finalArr = []
  if(members){
  for (let i = 0; i < members.length; i++){
    if (typeof members[i] === 'string'){
      finalArr.push(members[i].toUpperCase().trim()[0])
    } 
  }
  }
  // members.forEach(el => typeof el === 'string' ? finalArr.push(el.trim()[0].toUpperCase()) :  false)
  return finalArr.sort().join('')
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
