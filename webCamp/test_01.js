// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

function checkNumberOfPeople(numberOfPeople) {
    if (Number.isNaN(numberOfPeople))
        return "請填入有效數字 !";

    if (!isPositiveInteger(numberOfPeople))
        return "請填入正整數 !";

    if (!numberOfPeople) // numberOfPeople === 0
        return "電影沒人要看 !";
    else return "照常播放電影";
    // if (numberOfPeople > 0) // numberOfPeople >= 1
}

// console.log(numberOfPeople)
// checkNumberOfPeople(numberOfPeople);
const numberOfPeople = Number(process.argv[2]);
const movieAnnouncement = checkNumberOfPeople(numberOfPeople);
console.log(movieAnnouncement);

function isPositiveInteger(numberOfPeople) {
    return numberOfPeople >= 0 || !(numberOfPeople % 1);
}

/* 可進化項目
1. 程式碼的距離
變數和將此變數引入某一函式以參數帶程式碼盡量放靠近些

2. 不要在命名上用反義命名，透過 ！ 處理
ex.!isPositiveInteger(numberOfPeople)
3. 使用const , let優於 car
4. 善用重構功能：fn + F2
5. 透過小燈泡，讓判斷句的條件更有語意化
*/