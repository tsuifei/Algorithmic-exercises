// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

var inputNumber1 = Number(process.argv[2]);
var inputNumber2 = Number(process.argv[3]);

//compareRemainder
function comparisonRemainder(inputNumber1, inputNumber2) {
    const remainder1 = inputNumber1 % 3;
    const remainder2 = inputNumber2 % 3;
    if (Number.isNaN(inputNumber1 && inputNumber2))
        return "請填入數字 !";
    // if(Number.isNaN(inputNumber1)){
    //     return '你輸入的值為: ' + process.argv[2] + '請輸入數字';
    // }
    // if(Number.isNaN(inputNumber2)){
    //     return '你輸入的值為: ' + process.argv[3] + '請輸入數字';
    // }
    if (remainder1 % 1 !== 0 || remainder2 % 1 !== 0) //compare test_01.js isPositiveInteger function
        return "請填入整數 !";
    if (remainder1 !== remainder2)
        return "餘數不相同";
    return "餘數相同";
}

var comparingResults = comparisonRemainder(inputNumber1, inputNumber2);
console.log(comparingResults);