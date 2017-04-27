function to_roman (num) {
  // your implementation code here
    var txtRoman = "";
    if(num < 0 && num >= 3000){
        console.log("the number must be 1 until 3000")
    }
    else {
        while(num <= 3000) {
            if (num >= 1000) {
                txtRoman += "M";
                num -= 1000;
            }
            else if (num >= 900) {
                txtRoman += "CM";
                num -= 900;
            }
            else if (num >= 500) {
                txtRoman += "D";
                num -= 500;
            }
            else if (num >= 400) {
                txtRoman += "CD";
                num -= 400;
            }
            else if (num >= 100) {
                txtRoman += "C";
                num -= 100;
            }
            else if (num >= 90) {
                txtRoman += "XC";
                num -= 90;
            }
            else if (num >= 50) {
                txtRoman += "L";
                num -= 50;
            }
            else if (num >= 40) {
                txtRoman += "XL";
                num -= 40;
            }
            else if (num >= 10) {
                txtRoman = "X";
                num -= 10;
            }
            else if (num >= 9) {
                txtRoman += "IX";
                num -= 9;
            }
            else if (num >= 5) {
                txtRoman += "V";
                num -= 5;
            }
            else if (num >= 4) {
                txtRoman += "IV"
                num -= 4;
            }
            else if (num >= 1) {
                txtRoman += "I";
                num -= 1;
            }
            else if (num == 0) {
                num = 0;
                txtRoman == "";
                return txtRoman;
            }
        }
    }
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(1997))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))

module.exports = {
  to_roman
}