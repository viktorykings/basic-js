const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  const seasons = {
    0 : 'winter',
    1 : 'winter',
    2 : 'spring',
    3 : 'spring',
    4 : 'spring',
    5 : 'summer',
    6 : 'summer',
    7 : 'summer',
    8 : 'fall',
    9 : 'fall',
    10 : 'fall',
    11 : 'winter',
  }
  if (date == undefined){  
    return 'Unable to determine the time of year!'
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  try {
    date.getTime();
  } catch (e) {
    throw new Error('Invalid date!');
  }
  if(date instanceof Date){
        let month = date.getMonth()
        for (let key in seasons ){
          if (month == key){
            return seasons[key]
          }
        }
    }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
