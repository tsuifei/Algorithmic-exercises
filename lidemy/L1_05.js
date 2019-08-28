// 5. 請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫

function isUpperCase(str) {
    let char = str[0];
    return char >= 'A' && char <= 'Z';
}
console.log(isUpperCase("hello"));