let str = '';

const arr1 = ['I','X','C','M'];
const arr5 = ['V','L','D'];

function to_roman(num) {
  let strNum = num.toString();
  let strLen = strNum.length;
  let firstNum = parseInt(strNum.charAt(0));

  if (firstNum <= 3) {
    str += arr1[strLen-1].repeat(firstNum);
  } else if (firstNum === 4) {
    str += arr1[strLen-1]+arr5[strLen-1];
  } else if (firstNum === 5) {
    str += arr5[strLen-1];
  } else if (firstNum <= 8 && firstNum >= 6) {
    let rep = firstNum - 5;
    str += arr5[strLen-1] + ( arr1[strLen-1].repeat(rep) );
  } else if (firstNum === 9) {
    str += arr1[strLen-1] + arr1[strLen];
  }

  if (strLen-1 > 0) {
    let nNum = parseInt(strNum.substr(1));
    return to_roman(nNum);
  } else {
    let str2 = str;
    str = '';
    return str2;
  }

}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))

//if count < 3 pake arr1
//else count == 5 pake arr5
//else if count 4 pake arr1+arr5 (idx sama) --kecuali M
//idx
/*
1-3 :
  length 4 => len -1 => 3 => arr1[3] //M
  length 3 => len -1 => 2 => arr1[2] //C
4 :
  length 3 => len - 1 => arr1[i]+arr5[i] => X //400 CD
  length 2 => 1 =>arr1[1]+arr5[1] => X
5 :
  length 3 => len-1 => arr5[i] => D
  length 2 => 1 => arr5[1] => L
6- 8 : ADA REPEAT DIBELAKANG
  length 3 =>  len-1 => arr5[i]+   arr1[i].repeat //600 DC
  length 2 =>  //60 LX
9:
  length 3 => len-1 => arr1[2]+arr1[3] => CM //900
  length 2 => arr1[1]+arr1[2] => XC  //90
  length 1 => arr1[0]+arr[1] //9
*/
