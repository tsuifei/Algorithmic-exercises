/*
找出陣列中最小的數字

*/

function findMinimumNumberInArray(arr) {
  let MinimumNumber = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < MinimumNumber) {
      MinimumNumber = arr[i]
    }
  }
  return MinimumNumber
}

let arrayTest = [3.1, 5.3, 4.2, -10, -0.7, null]
console.log(findMinimumNumberInArray(arrayTest));