const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // Проверяем, является ли входной массив пустым или не содержит элементов
    if (arr.length === 0) {
      return 1; // Если массив пустой, то его глубина равна 1
    }

    // Если в массиве есть вложенные массивы, то рекурсивно вычисляем их глубину
    // и возвращаем максимальную глубину, увеличенную на 1
    if (Array.isArray(arr)) {
      return 1 + Math.max(...arr.map(item => this.calculateDepth(item)));
    }

    return 0; // Если входной параметр не является массивом, то возвращаем 0
  }


  }


module.exports = {
  DepthCalculator
};
