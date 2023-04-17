const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {}; // Создаем объект для хранения статистики DNS

  for (const domain of domains) { // Проходим по каждому домену из входного массива
    const domainParts = domain.split('.').reverse(); // Разделяем домен на части и переворачиваем массив
    let dns = ''; // Инициализируем пустую строку для DNS

    for (const part of domainParts) { // Проходим по каждой части домена
      dns += `.${part}`; // Добавляем каждую часть к DNS, предварительно добавляя точку
      if (dnsStats[dns]) {
        dnsStats[dns]++; // Если DNS уже существует в объекте статистики, увеличиваем его счетчик на 1
      } else {
        dnsStats[dns] = 1; // Иначе, создаем новый DNS со значением 1
      }
    }
  }

  return dnsStats; // Возвращаем объект статистики DNS
}


module.exports = {
  getDNSStats
};
