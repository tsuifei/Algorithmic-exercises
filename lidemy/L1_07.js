// 請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n

// function findSmallCount(arr, n) {
//     result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < n) {
//             result = result + 1;
//         }
//     }
//     return result
// }
// console.log(findSmallCount([1, 2, 3, 4, 5], 3))

// utilise filter()
function findSmallCount2(arr, n) {
    return arr.filter(function(item) {
        return item < n;
    }).length
}
console.log(findSmallCount2([1, 2, 3, 4, 5], 3))