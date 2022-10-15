const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
 if (!sampleActivity || typeof sampleActivity !== 'string') return false

  let currentActivityNum = parseFloat(sampleActivity);
  if ( isNaN(currentActivityNum)) return false
    const k = 0.693 / HALF_LIFE_PERIOD;
    const res = Math.log( MODERN_ACTIVITY / currentActivityNum )/ k
    if (currentActivityNum > MODERN_ACTIVITY) {
      return false
    }
    if(typeof currentActivityNum === 'number' && currentActivityNum > 0 ){
      return Math.ceil(res) 
    } else return false

  
 
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
