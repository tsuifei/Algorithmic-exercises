// 941 Valid Mountain Array
/* Given an array of integers arr, return true if and only if it is a valid mountain array.
給定一個整數數組 arr，當且僅當它是一個有效的山數組時才返回 true。
arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true
*/
/*
思路：
找出陣列中最大的數，開始左與右的比對
向左：如果左邊的數比右邊小就繼續查找，否則回傳false
向右：如果右邊的數比左邊小就繼續查找，否則回傳false
*/

const arr2 = [2,1]
const arr1 = [3,5,5]
const arr = [0,3,2,1]
const arr3 = [0,3,2,1,3]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
  if(arr.length<3) return false; 
  // 記錄升和降
  let rise = false
  let drop = false
  let index = 1
  // rise
  while(arr[index] > arr[index-1]){
    index++
    rise = true
  }
  if(arr[index] == arr[index+1]) return false
  // Drop
  while(arr[index-1] > arr[index]){
    index++
    drop = true
  }
  console.log(index);
  return rise & drop && index == arr.length
};
console.log(validMountainArray(arr3));
