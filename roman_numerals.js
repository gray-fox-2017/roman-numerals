function to_roman (num) {
  // your implementation code here
    var TulisanArray = "";
    var ArrNumber = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var ArrRoman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    for(var i = 0; i < ArrNumber.length; i++) {
        //check angka nya ada di Arr Roman Tersebut dengan mengecheck dengan angka tersebut masuk dimana
        if (num >= ArrNumber[i]) {
            //jika angka yang true lakukan pengecekan di bawah dari 5 sampai di bawah dari 8
            if (5 <= num && num <= 8) {
                // lakukan num - 5 untuk selain Romawi I;
                num -= 5;
            }
            // jika angka yang true di bawah dari angka 1 sampai angka ke 3;
            else if (1 <= num && num <= 3) {
                // lakukan num - 1 untuk Romawi I;
                num -= 1;
            }
            else {
                // lakukan pemotongan number;
                num -= ArrNumber[i];
            }
            TulisanArray += ArrRoman[i];
            i--;
        }
    }
    return TulisanArray;
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('———|—————|———')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))

module.exports = {
  to_roman
}