// deleteVowels.js

var removeVowels = function removeVowels(arrayOfStrings) {
  return arrayOfStrings.map( function(str) {
    return str.replace(/[aeiou]/ig, '');
  });
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]