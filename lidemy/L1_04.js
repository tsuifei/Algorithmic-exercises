// 4. 請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
function starReturn(n) {
    let stars = '';
    for (let i = 1; i <= n; i++) {
        stars = stars + "*"
    }
    return console.log(stars);
}

// console.log(starReturn(8));
starReturn(8);