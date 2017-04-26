// function to_roman_old (num) {
//   // your implementation code here
// }

function to_roman (num) {
  // your implementation code here
//  let integer_array = [3000,2900,2500,2400,2000,1900,1500,1400,1000,900,500,400,100,90,50,40,10,9,5,4,1];
//  let roman_array = ['MMM','MMCM','MMD','MMCD','MM','MCM','MD','MCD','M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let integer_array = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let roman_array = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let temp = [];
  if(num>3000){
    return 'angka di atas batas'
  } else if (num<1){
    return 'angka di bawah batas'
  } else {
    let i=0;
    while(i!=integer_array.length){
      if(num>=integer_array[i]){
        temp.push(roman_array[i]);
        num = num - integer_array[i];
      } else {
        i++
      }
    }
  }
  return temp.join('');
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
console.log('1747  | MDCCXLVII| ', to_roman(1747))

// module.exports = {
//   to_roman_old,
//   to_roman
// }
