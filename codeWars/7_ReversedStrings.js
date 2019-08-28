// Reversed Strings
// 題目連結：https://www.codewars.com/kata/reversed-strings/javascript
// 題目說明： 把輸入的文字反轉過後回傳，如果想挑戰自己的話，可以試試看用陣列的各種內建函式組合完成

// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

// Solution

function solution(str) {
    let strRe = str.split('')
    return strRe.reverse().join('').replace(',')
}
console.log(solution("philippe42"))

// 也可以這樣寫
function solution2(str) {
    return str.split('').reverse().join('').replace(',')
}
console.log(solution2("philippe42"))