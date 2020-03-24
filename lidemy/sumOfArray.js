/*
陣列總和
*/
function sumOfArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      arr[i] = 0
    }
    sum += arr[i]
  }
  return sum
}

const arrTest = [1, 2, 3, 4, 5, 6, null]
console.log(sumOfArray(arrTest));