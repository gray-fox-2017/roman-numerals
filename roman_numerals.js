// Priambodo Nur Kurniawan | Roman Numerals

function to_roman (num) {
  var romanCodes = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // satuan
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // puluhan
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // ratusan
    ['', 'M', 'MM', 'MMM'] // ribuan
  ]
  var roman = num.toString().split('').reverse(); // mengubah number menjadi string, memecah number & membaliknya.
  var str = '';
  for (var i=0; i<roman.length; i++ ){
    str = romanCodes[i][parseInt(roman[i])] + str;
  }
  return str;
}
console.log(to_roman(476));
// Drive code

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))

module.exports = {
  to_roman
}
