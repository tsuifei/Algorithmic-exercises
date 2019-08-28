/*
Thinkful - Logic Drills: Traffic light
https://www.codewars.com/kata/thinkful-logic-drills-traffic-light
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
For example, update_light('green') should return 'yellow'.

你正在編寫代碼來控制你鎮上的紅綠燈。 您需要一個功能來處理從綠色，黃色到紅色再到綠色的每個變化。
完成將字符串作為表示燈光當前狀態的參數的函數，並返回表示燈光應更改為的狀態的字符串。
例如，update_light（'green'）應該返回'yellow'。
*/

// solution
function updateLight(current) {
    if (current === 'green') {
        return 'yellow'
    } else if (current === 'yellow') {
        return 'red'
    }
    return 'green'
        //your code here!
}
console.log(updateLight('green'))

// 其他solution 可用三元運算子！
// function updateLight(current) {
//     return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
//   }