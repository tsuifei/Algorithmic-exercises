/*
找出陣列中最大的數字

*/

function findMinimumNumberInArray(arr) {
  let maximumNumber = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      arr[i] = 0
    }
    if (arr[i] > maximumNumber) {
      maximumNumber = arr[i]
    }
  }
  return maximumNumber
}

let arrayTest = [3.1, 5.3, 4.2, -10, -0.7, 42, null, '100']
console.log(findMinimumNumberInArray(arrayTest));