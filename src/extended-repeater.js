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
function repeater(str, options) {
  // Проверка на наличие обязательного параметра str
  if (typeof str !== 'string') {
    str = String(str);
  }

  // Инициализация опций со значениями по умолчанию, если они не переданы
  const additionRepeatTimes = options && options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options && options.additionSeparator ? options.additionSeparator : '|';

  const repeatTimes = options && options.repeatTimes ? options.repeatTimes : 1;
  const separator = options && options.separator ? options.separator : '+';
  const addition = options && options.addition !== undefined ? String(options.addition) : '';

  let result = '';

  // Создание повторяющейся строки с добавлением опциональной строки addition
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      if (j < additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
