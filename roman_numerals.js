function to_roman_old (num) {
  // yourimplementation code here

}

function to_roman (num) {
   //your implementation code here
   if (num > 1000) {
     var ribuan = Math.sqrt(num/1000);
   } else {
     var ribuan = num;
   }

   if (num > 1000) {
     var sisaRibuan = num % 1000;
   } else {
     var sisaRibuan = num
   }

   if (num > 500) {
     var limaRatusan = Math.sqrt(sisaRibuan/500);
   } else {
     var limaRatusan = num;
   }

   if (num > 500) {
     var sisaLimaRatusan = sisaRibuan%500;
   } else {
     var sisaLimaRatusan = num;
   }

   if (num > 100) {
     var ratusan = Math.sqrt(sisaLimaRatusan/100);
   } else {
     var ratusan = num;
   }

   if (num > 100) {
     var sisaRatusan = sisaLimaRatusan%100;;
   } else {
     var sisaRatusan = num;
   }

   if (num > 50) {
     var limaPuluhan = Math.sqrt(sisaRatusan/50);
   } else {
     var limaPuluhan = num;
   }

   if (num > 50) {
     var sisaLimaPuluhan = sisaRatusan%50;
   } else {
     var sisaLimaPuluhan = num;
   }

   if (num > 10) {
     var puluhan = Math.sqrt(sisaLimaPuluhan/10);
   } else {
     var puluhan = num;
   }

   if (num > 10) {
     var sisaPuluhan = sisaLimaPuluhan%10;
   } else {
     var sisaPuluhan = num;
   }

   if (num>5) {
     var limaan = Math.sqrt(sisaPuluhan/5);
   } else {
     var limaan = num
   }

   if (num>5) {
     var sisaLimaan = sisaPuluhan%5;
   } else {
     var sisaLimaan = num;
   }

   var satuan = sisaLimaan;

var hasil = [];

if (num>1000) {
  for (let i=0;i<ribuan;i++) {
  hasil.push('M')
  }
  for (let i=0;i<limaRatusan;i++) {
  hasil.push('D')
  }
  for (let i=0;i<ratusan;i++) {
    hasil.push('C')
  }
  for (let i=0;i<limaPuluhan;i++) {
  hasil.push('L')
  }
  for (let i=0;i<puluhan;i++) {
  hasil.push('X')
  }
  for (let i=0;i<limaan;i++) {
  hasil.push('V')
  }
  if (num>1) {
    for (let i=0;i<satuan;i++) {
    hasil.push('I')
    }
  }
  //untuk limaratusan
} else if (num>500) {
  for (let i=0;i<limaRatusan;i++) {
  hasil.push('D')
  }
}

if (num>100) {
  for (let i=0;i<ratusan;i++) {
    hasil.push('C')
  }
}

if (num>50){
  for (let i=0;i<limaPuluhan;i++) {
  hasil.push('L')
  }
}

if (num>10){
  for (let i=0;i<puluhan;i++) {
  hasil.push('X')
  }
}

if (num>5){
  for (let i=0;i<limaan;i++) {
  hasil.push('V')
  }
}

if (num>1) {
  for (let i=0;i<satuan;i++) {
  hasil.push('I')
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
