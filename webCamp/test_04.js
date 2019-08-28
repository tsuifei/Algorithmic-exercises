// 4. 輸入 n 印出 1+2-3+4-5+6...n 的算式與總和

// let n = Number(process.argv[2]);

// function calculatedSum(n) {
//     var i = 2;
//     var sum = 0;
//     while (i < n) {
//         if (i % 2 !== 0) {
//             i = i * -1;
//         }
//         i++;
//         console.log(i);
//     }
//     sum += i;
//     return sum;
// }
// let sumResult = calculatedSum(n);
// console.log(sumResult);

// ---------------------
// let n = Number(process.argv[2]);

// var i = 2;
// var sum = 1;
// var negaSum = 0;

// while (i <= n) {
//     if (i % 2 === 0) { // 偶數
//         sum += i;
//     } else { // 奇數
//         negaSum += i;
//     }
//     i++;
// }
// console.log('sum ' + sum)
// negaSum = negaSum * -1;
// console.log('negaSum ' + negaSum)
// var result = sum + negaSum;
// console.log('total= ' + result);

// =----------------------------
let n = Number(process.argv[2]);

function calculatedSum(n) {
    var i = 2;
    var sum = 1;
    var negaSum = 0;

    while (i <= n) {
        if (i % 2 === 0) { // 偶數
            sum += i;
        } else { // 奇數
            negaSum += i;
        }
        i++;
        // console.log('i = ' + i);
    }
    console.log('sum ' + sum)
    negaSum = negaSum * -1;
    console.log('negaSum ' + negaSum)
    var result = sum + negaSum;
    console.log('total= ' + result);
}