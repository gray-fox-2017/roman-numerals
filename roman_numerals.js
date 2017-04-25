"use strict"
function to_roman_old (num) {
  // your implementation code here
}

function to_roman (num) {
  let rom=[];
  if(num>=1000) {
    let hasil=Math.floor(num/1000);
    while(hasil>0) {
      rom.push('M');
      hasil--;
    }
    num=num%1000;
  }
  if(num>=500) {
    let hasil=Math.floor(num/500);
    while(hasil>0) {
      rom.push('D');
      hasil--;
    }
    num=num%500;
  }
  if(num>=100) {
    let hasil=Math.floor(num/100);
    let hitung=0;
    while(hasil>0) {
      rom.push('C');
      hasil--;
      hitung++;
      if(hitung==4) {
        while(hitung>1) {
          rom.pop();
          hitung--;
        }
        rom.push('D');
      }
    }
    num=num%100;
  }
  if(num>=50) {
    let hasil=Math.floor(num/50);
    while(hasil>0) {
      rom.push('L');
      hasil--;
    }
    num=num%50;
  }
  if(num>=10) {
    let hasil=Math.floor(num/10);
    let hitung=0;
    while(hasil>0) {
      rom.push('X');
      hasil--;
      hitung++;
      if(hitung==4) {
        while(hitung>1) {
          rom.pop();
          hitung--;
        }
        rom.push('L');
      }
    }
    num=num%10;
  }
  if(num>=5) {
    let hasil=Math.floor(num/5);
    while(hasil>0) {
      rom.push('V');
      hasil--;
    }
    num=num%5;
    if(num>=4) {
      rom.pop();
      rom.push('I');
      rom.push('X');
      num=0;
    }
  }
  if(num>=1) {
    let hasil=Math.floor(num/1);
    let hitung=0;
    while(hasil>0) {
      rom.push('I');
      hasil--;
      hitung++;
      if(hitung==4) {
        while(hitung>1) {
          rom.pop();
          hitung--;
        }
        rom.push('V');
      }
    }
    num=num%1;
  }
  return rom.join('');
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
