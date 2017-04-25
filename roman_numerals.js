// function to_roman_old (num) {
//   // your implementation code here
// }

function to_roman (num) {

  var romawi = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // satuan
                ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // puluhan
                ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],         // ratusan
                ["","M","MM","MMM"]]  ;                                     // ribuan

   var numeral = "";
   var digits = num.toString().split('').reverse();
   for (var i=0; i < digits.length; i++){
     numeral = romawi[i][parseInt(digits[i])] + numeral;
   }
   return numeral;

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

// module.exports = {
//   //to_roman_old,
//   to_roman
// }
