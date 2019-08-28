// Alternate case
// 題目連結：https://www.codewars.com/kata/alternate-case
// 題目說明：把大寫字母轉成小寫，小寫字母轉成大寫
// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// 寫函數alternateCase，它將字符串中的每個字母從上到下，從下到上切換。 例如：Hello World - > hELLO WORLD
// 另一種寫法 https://codepen.io/tsuifei/pen/gjZJeV

// Solution
function alternateCase(str) {
    str = str.split('') //先把str拆開
    let strOK = []
    let j = 0
    for (let i = 0; i < str.length; i++, j++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            strOK[j] = str[i].toLowerCase()
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            strOK[j] = str[i].toUpperCase()
        } else if (str[i] == ' ') {
            strOK[j] = str[i]
        } else
            strOK[j] = str[i]
    }
    return strOK.join('');
}
console.log(alternateCase('Hello Word Paris !'))
console.log(alternateCase('abc'))
console.log(alternateCase('ABC'))

//別人的solution map()看了說明還是不太懂，或許需要應用才知道....
// function alternateCase(s) {
// return s.split("").map(a=> a==a.toLowerCase()?a.toUpperCase():a.toLowerCase()).join("")
// }