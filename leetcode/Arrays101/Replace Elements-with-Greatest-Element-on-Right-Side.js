
/** 
 * No.1299
 * 用右側最大的元素替換元素
 * Input: arr = [17,18,5,4,6,1]
 * Output: [18,6,6,6,1,-1]
 * 給一個數組，從第一個元素去比較這個元素有邊的所有數，在右邊找到最大數，再與當前比較的數交換，接著第二個數，
 * 最後一個元素以-1替換
 * 陣列長度為1時，回傳 -1
 * https://www.youtube.com/watch?v=ZHjKhUjcsaU
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
let arr = [17,18,5,4,6,1]
let arr1 = [5,20,3,7,2]
 var replaceElements = function(arr) {
   if(arr.length < 2) return -1
   // 將陣列第一個元素的值賦給max
  let newArr = []
  // 將 newArr 最後一個元素賦值 -1
  newArr[arr.length-1] = -1
  // 使用 for 迴圈從陣列最後一個值開始做遍歷
  for( let i=arr.length-2; i>=0; i--){
    newArr[i]=Math.max(newArr[i+1],arr[i+1])
  }
  return newArr


};
console.log(replaceElements(arr));




var replaceElements2 = function(arr) {
  if(arr.length < 2) return [-1]

  let rightMax = -1
  let newMax =0
  for( let i=arr.length-1; i>=0; i--){
    newMax = Math.max(rightMax, arr[i])
    arr[i] = rightMax
    rightMax = newMax
  }
  return arr
};
console.log(replaceElements2(arr1));