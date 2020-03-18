// 單純數字
function filterOddNumber(num) {
  for (var i = 0; i < num; i++) {
    if (i % 2 === 1) {
      console.log(i)
    }
  }
}

// filterOddNumber(100)

//input 陣列,output 陣列

function filterOddNumberArr(arr) {
  let result = []

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 1) {
      result.push(arr[i])
    }
  }
  return result
}

let nums = [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 42]
let results = filterOddNumberArr(nums)
console.log(results)

// 使用 Array.filter
const resultFilter = nums.filter(item => item % 2 === 1);
console.log(resultFilter)