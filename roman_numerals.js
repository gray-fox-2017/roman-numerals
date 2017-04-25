function to_roman_old (num) {
  // your implementation code here
  let hasil = ""
  for (let i = 1; i<=6; i++) {
    if (num >= 1000) {
      hasil += 'm'
      num = num % 1000
    } else if (num >=500) {
      if (num <900) {
        hasil += 'd'
        num = num % 500
      } else {
        hasil += 'cm'
      }
    } else if (num >=100) {
      if (num < 400) {
        hasil += 'c'
        num = num % 100
      } else {
        hasil += 'cd'
        num = num % 400
      }
    } else if (num >= 50) {
      if (num <90) {
        hasil += 'l'
        num = num % 50
      } else {
        hasil += "xc"
        num = num % 90
      }
    } else if (num >= 10) {
      if (num <40) {
        hasil += 'x'
        num = num % 10
      } else {
        hasil += 'xl'
        num = num % 40
      }
    } else if (num >=5) {
        hasil += 'v'
        num = num % 5
    } else if (num <=4) {
      if (num !=0) {
        hasil += 'i'
        num = num - 1
      } else {
        break
      }
    }
  }
  return hasil.toUpperCase()
}

function to_roman (num) {
  // your implementation code here
  let hasil = ""
  for (let i = 1; i<=6; i++) {
    if (num >= 1000) {
      hasil += 'm'
      num = num % 1000
    } else if (num >=500) {
      if (num <900) {
        hasil += 'd'
        num = num % 500
      } else {
        hasil += 'cm'
      }
    } else if (num >=100) {
      if (num < 400) {
        hasil += 'c'
        num = num % 100
      } else {
        hasil += 'cd'
        num = num % 400
      }
    } else if (num >= 50) {
      if (num <90) {
        hasil += 'l'
        num = num % 50
      } else {
        hasil += "xc"
        num = num % 90
      }
    } else if (num >= 10) {
      if (num <40) {
        hasil += 'x'
        num = num % 10
      } else {
        hasil += 'xl'
        num = num % 40
      }
    } else if (num >=5) {
      if (num < 9) {
        hasil += 'v'
        num = num % 5
      } else {
        hasil += 'ix'
        num = num % 9
      }
    } else if (num >= 4) {
       hasil += 'iv'
       num = num % 4

    } else if (num <4) {
      if (num !=0) {
        hasil += 'i'
        num = num - 1
      } else {
        break
      }
    }
  }
    return hasil.toUpperCase()
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
