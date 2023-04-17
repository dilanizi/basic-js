const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = String(n); // Преобразуем число в строку, чтобы проще было работать с цифрами
  let maxNum = Number.MIN_VALUE; // Инициализируем максимальное число наименьшим возможным значением

  // Итерируемся по каждой цифре в числе
  for (let i = 0; i < numStr.length; i++) {
    // Удаляем текущую цифру из числа
    const deletedNum = Number(numStr.slice(0, i) + numStr.slice(i + 1));
    
    // Сравниваем полученное число с текущим максимальным числом
    if (deletedNum > maxNum) {
      maxNum = deletedNum; // Если полученное число больше текущего максимального, обновляем максимальное число
    }
  }

  return maxNum; // Возвращаем максимальное число после удаления одной цифры
}

module.exports = {
  deleteDigit
};
