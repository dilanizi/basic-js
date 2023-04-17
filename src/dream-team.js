const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Проверяем, что переданный аргумент является масивом
  if (!Array.isArray(members)) {
    return false;
  }

  // Создаем новый массив, содержащий только имена участников
  const filteredMembers = members.filter(member => typeof member === 'string');

  // Проверяем, что в итоговом массиве остались только строки
  if (filteredMembers.length === 0) {
    return false;
  }

  // Создаем массив из первых букв имен участников (приводим к верхнему регистру)
  const initials = filteredMembers.map(member => member.trim()[0].toUpperCase());

  // Сортируем массив с инициалами в алфавитном порядке
  const sortedInitials = initials.sort();

  // Возвращаем инициалы в виде строки
  return sortedInitials.join('');
}

module.exports = {
  createDreamTeam
};
