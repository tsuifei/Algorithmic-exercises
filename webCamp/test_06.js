// 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。




let nameList = process.argv.slice(2, 6)

nameList1 = nameList.filter(function(element, index) {
    // console.log("开始处理第 " + index + " 元素");
    //如果元素大于 25 ，则返回
    // return currentValue > 25;
    return index % 2 === 0;
});
// console.log(nameList1);

str = "tracy";
ar = str.split('')

const result = '';
var myArr = ['tracy', 'Philippe'];
var newArr = myArr.map(function(element, index) {
    element = element.split('');
    console.log(element);
    if (index % 2 === 0)
        element.push();
    return element
});
// result = element.push();

// console.log(result);
console.log(newArr.length);

// map()
var arr = [1, 2, 4, 4]
var plus5 = []
for (var i = 0; i < arr.length; i++) {
    plus5[i] = arr[i] + 5
}
//plus5 = 



// 把字串拆解為陣列
// var arr=str.split(',');

// 把陣列組成為字串
// var str=arr.join(',')

// 檢查是否為陣列[4]
// Array.isArray(yourarray);   // returns true/false

// 方法三：filter
// 使用 Array.prototype.filter() 回傳符合條件的元素，得到一個新陣列。
// 如下例，回傳大於 10 的數字。

// var numbers = [1, 3, 6, 10, 99, 101];
// var filteredName = nameList.filter(function(index) {
//     return index % 2 !== 0;
// });
// filteredName //[99, 101]
// console.log(filteredName)

// let json = { id: 101 };
//往数组中多添置一些数据类型
// let arr1 = [1, 2, 30, 25, 18, 40, "Ha", undefined, NaN, null, json];