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
function getSeason(/* date */) {
  
    // Проверяем, что входной аргумент является объектом типа Date
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error("Invalid date object");
    }

    // Получаем месяц из объекта Date (от 0 до 11)
    const month = date.getMonth();

    // Определяем сезон в зависимости от месяца
    switch (month) {
      case 11:
      case 0:
      case 1:
        return "Winter";
      case 2:
      case 3:
      case 4:
        return "Spring";
      case 5:
      case 6:
      case 7:
        return "Summer";
      case 8:
      case 9:
      case 10:
        return "Autumn";
      default:
        throw new Error("Invalid date");
    }
  }



module.exports = {
  getSeason
};
