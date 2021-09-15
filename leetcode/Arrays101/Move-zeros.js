/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 1.需在原陣列裡操作，不能複製陣列
 * 2.盡量減少操作次數
 */

var moveZeroes1 = function(nums) {
  if(nums == null || nums.length == 0) return
  let j = 0
  for(let i = 0; i <nums.length; i++){
      if(nums[i] !== 0){
        nums[j++] = nums[i] 
      }
  }
  for(let i = j; i<nums.length; i++){
      nums[i]=0
  }
};
// 执行用时：84 ms, 在所有 JavaScript 提交中击败了81.32%的用户
// 内存消耗：39.4 MB, 在所有 JavaScript 提交中击败了45.34%的用户


var moveZeroes2 = function(nums) {
  if(nums == null || nums.length == 0) return

  let slow = 0
  for(let fast = 0; fast <nums.length; fast++){
      if(nums[fast] !== 0){
        let temp = nums[fast] 
        nums[fast] = nums[slow] 
        nums[slow] = temp
        slow++
      }
  }
};
// 执行用时：96 ms, 在所有 JavaScript 提交中击败了44.96%的用户
// 内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了95.07%的用户

/*
變數 i 如果不等於 0 ，就把這個位置的數字放到 J 記錄的位置(i,j 交換)，然後 j 需要往後移動一步，這樣變數 j 才會在下一個非 0 要換的位置
變數 j 紀錄非 0 的位置
*/

var moveZeroes = function(nums) {
  if(nums == null || nums.length == 0) return

  let slow = 0
  for(let fast = 0; fast <nums.length; fast++){
      if(nums[fast] !== 0){
        if(fast != slow) { // 減少交換次數
          // 互相交換
          let temp = nums[fast] 
          nums[fast] = nums[slow] 
          nums[slow] = temp
        }
        slow++
      }
  }
};