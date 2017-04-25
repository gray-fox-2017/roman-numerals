function to_roman_old (num) {
  // your implementation code here
}

function to_roman (num) {
  // your implementation code here
  let romanChar = "";
  let count = 0;

  while (num > 0) {
    if (num - 1000 >= 0 && num >= 1000) {

      num -= 1000;
      romanChar += "M";
    } else if (num - 500 >= 0 && num >= 500) {

        num -= 500;
        romanChar += "D"
    } else if (num - 100 >= 0 && num >= 100) {
      if (num - 400 > 0 && num >= 400) {
        num -= 400;
        romanChar += "CD";
      } else {
        num -= 100;
        romanChar += "C";
      }
    } else if (num - 50 >= 0 && num >= 50) {
      num -= 50;
      romanChar += "L";
    } else if (num - 10 >= 0 && num >= 10) {
      if (num - 40 >= 0 && num >= 40) {
        num -= 40;
        romanChar += "XL";
      } else {
        num -= 10;
        romanChar += "X";
      }

    } else if (num - 5 >= 0 && num >= 5) {
      if (num - 9 >= 0 && num >= 9) {
        num -= 9;
        romanChar += "IX";
      } else {
        num -= 5;
        romanChar += "V";
      }

    } else if (num - 1 >= 0 && num >= 1) {
      if (num - 4 >= 0 && num >= 4) {
        num -= 4;
        romanChar += "IV";
      } else {
        num -= 1;
        romanChar += "I";
      }
    }
  }
  return romanChar;
}

// Drive code
// console.log('My totally sweet testing script\n')
// console.log('input | expected | actual')
// console.log('———|—————|———')
// console.log('4     | IIII     | ', to_roman_old(4))
// console.log('9     | VIIII    | ', to_roman_old(9))
// console.log('13    | XIII     | ', to_roman_old(13))
// console.log('55    | LV       | ', to_roman_old(55))
// console.log('1453  | MCDLIII  | ', to_roman_old(1453))
// console.log('1646  | MDCXLVI  | ', to_roman_old(1646))

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))

module.exports = {
  to_roman_old,
  to_roman
}
