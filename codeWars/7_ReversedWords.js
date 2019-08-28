// 題目連結：https://www.codewars.com/kata/reversed-words
// 題目說明： 這一題是進階版的字串反轉，原本的只要把每個「字元」反轉，這個則是要把每個「單字」反轉。

// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

// Solution 1 Thomas
function reverseWords(str) {
    let str1 = str.split(' ')
    let str2 = ''
    for (let i = str1.length - 1; i >= 0; i--) {
        // console.log(str1)
        str2 += " " + str1[i]
            // console.log(str2)
    }
    return str2.trim() // reverse those words
}
console.log(reverseWords("Tracy in Paris"))

// Solution 2 Tsuifei
function reverseWords2(str) {
    let arr = str.split(' ')
    arr = arr.reverse()
    return arr.join(' ')
}
console.log(reverseWords2("The greatest victory is that which requires no battle"))

// Solution 3 Tsuifei
function reverseWords3(str) {
    return str.split('').reverse().join('')
}

// Solution 3 codewar
function reverseWords4(str) {
    return str.trim().split(' ').reverse().join(' '); // reverse those words
}
console.log(reverseWords("Philippe habite au aublancs"))