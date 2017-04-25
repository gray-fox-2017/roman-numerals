function to_roman_old (num) {
  // your implementation code here
}

function to_roman (num) {
  // your implementation code here
  var hasil=[];
  for(var i=num; 0<i;)
  {

    if(i>=1000)
    {

      hasil.push("M");
      i=i-1000;
    }

    else if(i>=500&&i<1000)
    {

       if(i>=900&&i<1000)
      {
        hasil.push("DM");
        i=i%900;
      }
      else
        {

          hasil.push("D");
          i=i%500;
        }

    }
    else if(i>=100&&i<500)
    {

      if(i>399&&i<500)
      {
        hasil.push("CD");
        i=i%400;
      }
      else
        {
          hasil.push("C");
          i=i%100;
        }
    }
    else if(i>=50&&i<100)
    {
      if(i>89&&i<100)
      {
        hasil.push("CL");
        i=i%90;
      }
      else
        {
          hasil.push("L");
          i=i%50;
        }
    }
    else if(i>=10&&i<50)
    {
       if(i>39&&i<50)
      {
        hasil.push("XL");
        i=i%40;
      }
      else{hasil.push("X");
      i=i%10;}
    }
    else if(i>=5&&i<10)
    {
      if(i===9)
      {
        hasil.push("IX");
        i=i%9;
      }
      else
      {
        hasil.push("V");
        i=i%5;
      }

    }
    else if(i<5)
    {
       if(i===4)
      {
        hasil.push("IV");
        i=i%4;
      }
      else
      {
       hasil.push("I");
      i--;
      }

    }
  }
    return hasil.join("");
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
