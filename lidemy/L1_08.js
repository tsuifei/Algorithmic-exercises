// 8. 請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和

function findSmallerTotal(arr, n) {
    result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            result = result + arr[i]
        }
    }
    return result
}

console.log(findSmallerTotal([1, 2, 3, 4, 5, 6, 7], 3))