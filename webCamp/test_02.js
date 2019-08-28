// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

var inputValue1 = Number(process.argv[2]);
var inputValue2 = Number(process.argv[3]);

function comparisonRemainder(inputValue1, inputValue2) {
    let remainder1 = inputValue1 % 3;
    let remainder2 = inputValue2 % 3;
    if (Number.isNaN(inputValue1 && inputValue2))
        return "請填入數字 !";
    if (remainder1 % 1 !== 0 || remainder2 % 1 !== 0)
        return "請填入整數 !";
    if (remainder1 !== remainder2)
        return "餘數不相同";
    return "餘數相同";
}

var comparingResults = comparisonRemainder(inputValue1, inputValue2);
console.log(comparingResults);