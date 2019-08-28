// 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}
console.log(sum([1, 2, 3, 0, -2]))
console.log(sum([-1, 1, 2, -2, 3, -3]))