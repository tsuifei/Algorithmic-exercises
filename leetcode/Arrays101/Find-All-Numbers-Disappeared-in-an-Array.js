// # Find All Numbers Disappeared in an Array
/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

給定一個包含 n 個整數的數組 nums，其中 nums[i] 在範圍 [1, n] 內，返回一個包含範圍 [1, n] 內所有未出現在 nums 中的整數的數組。

Example :
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Input: nums = [1,1]
Output: [2]



*/

// const nums = [4,3,2,7,8,2,3,1];
const nums = [1,1];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  
  let disappearedNumbersArray = [];
  for(let i = 0; i < nums.length; ++i){
    // 將元素的值變成絕對值，並且將元素值-1 成為元素的值 curr
    let curr = Math.abs(nums[i])-1;
    // 先將所有數字做上記號
    nums[curr] = -(Math.abs(nums[curr]))
  }
  console.log(nums);
  // 找所有不是負數的元素，元素的index+1 就是缺的數字
  for(let i = 0; i < nums.length; ++i){
    // 如果元素的值大於 0 ，就是我們要找的
    if(nums[i] > 0){
      disappearedNumbersArray.push(i+1); // index +1 即是元素值
    }
  }
  return disappearedNumbersArray;
};

let result = findDisappearedNumbers(nums)
console.log(result);