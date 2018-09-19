import { Injectable } from '@angular/core';

@Injectable()
export class ConverterService {
  convert(sentence) {
    const words = sentence.split(' ');
    let convertedSentence = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].trim() !== '') {
        convertedSentence += this.convertWord(words[i]) + (i !== words.length - 1 ? ' ' : '');
      }
    }
    return convertedSentence;
  }

  convertWord(word) {
    let newWord = '';
    let vowelRegEx = /[aeiouAEIOU]/i;
    let m = word.match(vowelRegEx);
    let lastChar = '';
    const tempChar = word.substring(word.length - 1, word.length);
    if (tempChar === '.' || tempChar === ',' || tempChar === '?' || tempChar === '!') {// very basic punctuation formatting
      word = word.substring(0, word.length - 1);
      lastChar = tempChar;
    }

    if (m != null && m.index === 0) { // Starts with a/e/i/o/u
        newWord = word + 'way' + lastChar;
    } else {
      const firstChar = word.substring(0, 1);
      if (firstChar !== 'y' && firstChar !== 'Y') { // also include 'Y' as a vowel
        vowelRegEx = /[aeiouyAEIOUY]/i;
        m = word.match(vowelRegEx);
      }

      if (m == null) { // No vowels
        newWord = word + 'ay' + lastChar;
      } else {
        // Contains a/e/i/o/u/y
        newWord = word.substring(word.length, m.index) + word.substring(m.index, 0) + 'ay' + lastChar;
      }
    }
    return newWord;
  }
}
