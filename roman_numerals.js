/*function to_roman_old (num) {
  // your implementation code here
}
*/

function to_roman (num) {
  // Parameters
  let romanSymbol = [['I','V','X'],['X','L','C'],['C','D','M']];
  let totalDigit = parseInt(Math.log10(num));
  let repeatLetter = 0;
  let romanNumber = '';

  // Thousandth
  if (totalDigit === 3) {
    romanNumber += 'M'.repeat(parseInt(num/1000));
    num = num%Math.pow(10,3);
    totalDigit -= 1;
  }

  for(let i=totalDigit; i>=0; i--) {
    repeatLetter = parseInt(num/Math.pow(10,i));
    if (repeatLetter === 9) {
      romanNumber += romanSymbol[i][0] + romanSymbol[i][2];
    }
    else if (repeatLetter === 4) {
      romanNumber += romanSymbol[i][0] + romanSymbol[i][1];
    }
    else if (repeatLetter === 5) {
      romanNumber += romanSymbol[i][1];
    }
    else if (repeatLetter < 4) {
      romanNumber += romanSymbol[i][0].repeat(repeatLetter);
    }
    else {
      romanNumber += romanSymbol[i][1];
      romanNumber += romanSymbol[i][0].repeat(repeatLetter%5);
    }
    num = num%Math.pow(10,i);
  }

    return romanNumber;
}


// Drive code
/*console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IIII     | ', to_roman_old(4))
console.log('9     | VIIII    | ', to_roman_old(9))
console.log('13    | XIII     | ', to_roman_old(13))
console.log('55    | LV       | ', to_roman_old(55))
console.log('1453  | MCDLIII  | ', to_roman_old(1453))
console.log('1646  | MDCXLVI  | ', to_roman_old(1646))
*/
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected |  actual  ');
console.log('------|----------|----------');
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))

module.exports = {
  //to_roman_old,
  to_roman
}
