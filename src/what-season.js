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
  // Если аргумент даты не передан, возвращаем соответствующее сообщение
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  // Проверяем, что входной аргумент является объектом типа Date
  if (!(date instanceof Date) || isNaN(date) || Object.prototype.toString.call(date) !== '[object Date]' || !isFinite(date)) {
    throw new Error("Invalid date!");
  }

  // Проверяем, что дата не является недопустимой
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date!");
  }

  // Получаем месяц из объекта Date (от 0 до 11)
  const month = date.getMonth();

  // Определяем сезон в зависимости от месяца
  switch (month) {
    case 11:
    case 0:
    case 1:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";
    default:
      throw new Error("Invalid date!");
  }
}







module.exports = {
  getSeason
};
