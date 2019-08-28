// 3. 寫一個函式 star，接收一個參數 n，並印出 n 個 *
function star(n) {
    let stars = '';
    for (let i = 1; i <= n; i++) {
        stars = stars + "*";
    }
    console.log(stars);
}
star(9);