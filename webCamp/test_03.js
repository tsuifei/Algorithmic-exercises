// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「邏輯運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢
//input age
const inputAge = Number(process.argv[2]);
const ticketPrice = 400;

const checkResult = checkDiscount(inputAge);
console.log(checkResult);

function checkDiscount(inputAge) {

    if (checkNumber(inputAge))
        return "請填入數字與正整數 !"
    if (inputAge <= 6 || inputAge >= 65)
        return "符合優惠門票條件"
    else return "請買全票";
}

function checkNumber(inputAge) {
    return Number.isNaN(inputAge) || inputAge % 1 !== 0 || inputAge < 0;
}