function to_roman_old (num) {
  // yourimplementation code here
}

function to_roman (num) {
   //your implementation code here
   var ribuan = Math.floor(num/1000);
   var sisaRibuan = num%1000;
   var ratusan = Math.floor(sisaRibuan/100);
   var sisaRatusan = sisaRibuan%100;
   var puluhan = Math.floor(sisaRatusan/10);
   var sisaPuluhan = sisaRatusan%10;
   var satuan = sisaPuluhan/1

var hasil = []

for (let i=0;i<ribuan;i++) {
  hasil.push('M');
}

if (ratusan===4) {
  hasil.push('CD');
} else if (ratusan === 9) {
  hasil.push('CM');
} else if (ratusan >= 5) {
  hasil.push('D');
  for (let i=0;i<ratusan-5;i++) {
    hasil.push('C');
  }
} else {
  for (let i=0;i<ratusan;i++) {
    hasil.push('C');
  }
}

if (puluhan===4) {
  hasil.push('XL');
} else if (puluhan === 9) {
  hasil.push('XC');
} else if (puluhan >= 5) {
  hasil.push('L');
  for (let i=0;i<puluhan-5;i++) {
    hasil.push('X');
  }
} else {
  for (let i=0;i<puluhan;i++) {
    hasil.push('X');
  }
}

if (satuan===4) {
  hasil.push('IV');
} else if (satuan === 9) {
  hasil.push('IX');
} else if (satuan >= 5) {
  hasil.push('V');
  for (let i=0;i<satuan-5;i++) {
    hasil.push('I');
  }
} else {
  for (let i=0;i<satuan;i++) {
    hasil.push('I');
  }
}

   return hasil.join('');
 }
// Drive code
console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IIII     | ', to_roman_old(4))
console.log('9     | VIIII    | ', to_roman_old(9))
console.log('13    | XIII     | ', to_roman_old(13))
console.log('55    | LV       | ', to_roman_old(55))
console.log('1453  | MCDLIII  | ', to_roman_old(1453))
console.log('1646  | MDCXLVI  | ', to_roman_old(1646))

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
