/*
Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
這很簡單。 您的目標是創建一個刪除字符串的第一個和最後一個字符的函數。 你有一個參數，原始字符串。 您不必擔心少於兩個字符的字符串。
https://www.codewars.com/kata/remove-first-and-last-character/train/javascript
*/

// Solution
function removeChar(str) {
    //You got this!
    str = str.split('').slice(1, -1).join('').replace(',')
        // str = str.join('').replace(',')
    return str
}
console.log(removeChar(' pHellop '))

// 看別人寫的更簡單的都要哭了，對現有函示要多了解
function removeChar(str) {
    return str.slice(1, -1);
}