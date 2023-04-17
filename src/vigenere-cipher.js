const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (this.alphabet.includes(char)) {
        const keyChar = key[keyIndex % key.length];
        const charIndex = this.alphabet.indexOf(char);
        const keyCharIndex = this.alphabet.indexOf(keyChar);
        const encryptedCharIndex = (charIndex + keyCharIndex) % this.alphabet.length;
        const encryptedChar = this.alphabet[encryptedCharIndex];
        encryptedMessage += encryptedChar;
        keyIndex++;
      } else {
        encryptedMessage += char;
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
      if (this.alphabet.includes(char)) {
        const keyChar = key[keyIndex % key.length];
        const charIndex = this.alphabet.indexOf(char);
        const keyCharIndex = this.alphabet.indexOf(keyChar);
        const decryptedCharIndex = (charIndex - keyCharIndex + this.alphabet.length) % this.alphabet.length;
        const decryptedChar = this.alphabet[decryptedCharIndex];
        decryptedMessage += decryptedChar;
        keyIndex++;
      } else {
        decryptedMessage += char;
      }
    }

    return decryptedMessage;
  }
}

// Пример использования


module.exports = {
  VigenereCipheringMachine
};
