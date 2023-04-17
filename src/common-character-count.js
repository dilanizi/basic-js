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
function getCommonCharacterCount(s1, s2) {
  // Преобразуем строки в массивы символов, чтобы проще было итерироваться по каждому символу
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  
  let commonCount = 0; // Инициализируем счетчик общих символов нулем
  
  // Итерируемся по каждому символу в arr1
  for (let i = 0; i < arr1.length; i++) {
    const char = arr1[i];
    
    // Проверяем, присутствует ли символ в arr2
    const charIndex = arr2.indexOf(char);
    if (charIndex !== -1) {
      // Если символ найден в arr2, увеличиваем счетчик общих символов
      commonCount++;
      
      // Удаляем символ из arr2, чтобы избежать повторного подсчета
      arr2.splice(charIndex, 1);
    }
  }
  
  return commonCount;
}

// Пример использования:
const s1 = 'aabcc';
const s2 = 'adcaa';
const commonCount = getCommonCharacterCount(s1, s2);
console.log(commonCount); // Вывод: 3


module.exports = {
  getCommonCharacterCount
};
