// Number-Star ladder
// ask 題目說明： 這題就是依照規律輸出文字，沒什麼好講的
// 題目連結：https://www.codewars.com/kata/number-star-ladder/javascript
// Using n as a parameter in the
// function pattern, where n should be a natural number, complete the codes to get the pattern(take the help of examples):

//     Note: There is no newline in the end(after the pattern ends)

// Examples
// pattern(3) should
// return `"1\n12\n1*3", e.g. the following:

// 1
// 1*2
// 1**3
// pattern(10): should return the following:

// 1
// 1*2
// 1**3
// 1***4
// 1****5
// 1*****6
// 1******7
// 1*******8
// 1********9
// 1*********10
// Note that there shouldn't be any trailing newlines.

// Solution
function pattern(n) {
    var output = "1"; //預備一個變數，裡面有１（因為每行都是１開頭）
    //being coder
    for (var i = 2; i <= n; i++) { //用for從２把n用iㄧㄧ叫出來
        output += "\n" + 1 + Array(i).join("*") + i
            // for叫出每一行，output再加上每行的換行＋１＋每次的i數用＊替代＋當行i的數字
    }
    return output
}
console.log(pattern(5))