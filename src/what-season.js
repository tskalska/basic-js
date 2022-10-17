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
function getSeason(date) {

  if (!date) {
    return false;
  }

  const month = date.getMonth()+1;
  
  console.log(month);
  
  if (month >= 3 && month <= 5) {
    return 'spring';
  }

  if (month >= 6 && month <= 8) {
    return 'summer';
  }

  if (month >= 9 && month <= 11) {
    return 'fall';
  }

  if (month === 1 || month === 2 || month ===12 ) {
    return 'winter';
  }

}

module.exports = {
  getSeason
};
