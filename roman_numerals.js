"use strict"
function to_roman_old (num) {
  // your implementation code here
}

function to_roman (num) {
  let rom=[];
  if(num>=1000) {
    let jumlahSimbol=Math.floor(num/1000);
    let n=jumlahSimbol;
    while(jumlahSimbol>0) {
      rom.push('M');
      jumlahSimbol--;
    }
    num=num%(n*1000);
  }
  if(num>=500) {
    let jumlahSimbol=Math.floor(num/500);
    while(jumlahSimbol>0) {
      rom.push('D');
      jumlahSimbol--;
    }
    num=num%500;
    if(num>=400) {
      rom.pop()
      rom.push('C');
      rom.push('M');
      num=(num+500)%100;
    }
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
    let jumlahSimbol=Math.floor(num/50);
    while(jumlahSimbol>0) {
      rom.push('L');
      jumlahSimbol--;
    }
    num=num%50;
    if(num>=40) {
      rom.pop()
      rom.push('X');
      rom.push('L');
      num=(num+50)%10;
    }
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
    let jumlahSimbol=Math.floor(num/5);
    while(jumlahSimbol>0) {
      rom.push('V');
      jumlahSimbol--;
    }
    num=num%5;
    if(num>=4) {
      rom.pop()
      rom.push('I');
      rom.push('X');
      num=(num+5)%1;
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
console.log('1646  | MDCXLVI  | ', to_roman(50))

module.exports = {
  to_roman_old,
  to_roman
}
