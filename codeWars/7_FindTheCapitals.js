// Find the capitals
// 題目連結：https://www.codewars.com/kata/find-the-capitals-1/javascript
// 題目說明：回傳大寫字母所在的 index

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// 編寫一個以單個字符串（單詞）作為參數的函數。 該函數必須返回一個有序列表，其中包含字符串中所有大寫字母的索引。

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Solution
var capitals = function(word) {
    // Write your code here
    let str = word.split('') //將字串拆成array
    let capLetters = [] //設一個空array裝找的大寫index
        // console.log(str)
    for (let i = 0; i < str.length; i++) { // 用for把每個i讀出來
        if (str[i] >= 'A' && str[i] <= 'Z') { //str[i] 如果大於等於Ａ and 小於等於Ｚ
            capLetters.push(i) // 直接把i index推進去 array裡
        }
    }
    return capLetters
}
console.log(capitals('CodEWaRs'))