// const { NotImplementedError } = require('../extensions/index.js');

// /**
//  * Create a repeating string based on the given parameters
//  *  
//  * @param {String} str string to repeat
//  * @param {Object} options options object 
//  * @return {String} repeating string
//  * 
//  *
//  * @example
//  * 
//  * repeater('STRING', { repeatTimes: 3, separator: '**', 
//  * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
//  * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
//  *
//  */
// function repeater(str, options) {

//   let newString;
  
//   let addition = (options.addition).repeat(options.additionRepeatTimes);

//   console.log(addition);
  
//   (((string+(options.addition*options.additionRepeatTimes)).join(options.additionSeparator)).join(options.separator))*options.repeatTimes;

  
//   return newString;
// }

// module.exports = {
//   repeater
// };
