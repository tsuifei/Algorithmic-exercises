// 回傳 Array 裡最大的整數
function findLargest(arrNumbers){
  let result = arrNumbers.sort((a,b)=> b-a)
  return result[0]
}

// 解答寫法，待解釋
function findLargestOK(arrNumbers){
  return Math.max.apply(null, arrNumbers)
}

// const arrNumbers = [1, -28, 88, 200, 7]
const arrNumbers = [1, -28, 420, 200, 7]
// console.log(findLargest(arrNumbers));
// console.log(findLargestOK(arrNumbers));

// 回傳陣列裡數字的平均值，如果陣列是空的，回傳0
function average(arr){
  let total = 0

  if(arr.length !== 0){
  for(let i=0; i<arr.length;i++)
  total+= arr[i];
  return total / arr.length
  } else return 0
}
let arr = [0,1,2,3,4,5,6,7,8,9,10,11]
let arr2 = []
// console.log(average(arr2)); //5


// 如果參數有1，或參數總和是 1 ，請回傳布林值 true

function test1(num1, num2){
  let total = 0;
  for(let i=0; i< arguments.length; i++ ){
    console.log(arguments[i])
    total += arguments[i]
    if(arguments[i] == 1){
      return true
    } 
  }
  if(total == 1) return true
  return false
}
// console.log(test1(-3,4,2,-2));

// Factorial 階乘 遞迴
function Factorial(n){
  if(n === 1) return n
  return n * Factorial(n-1)
}
console.log(Factorial(1));
