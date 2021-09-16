/*
https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let nums = [0,1,0,3,12] // --> [ 1, 3, 12, 0, 0 ]
let nums1 = [2,1] // --> [2,1]
let nums2 = [1,0,1] // --> [1,1,0]
let nums3 = [0] // --> [0]
var moveZeroes = function(nums) {
  if(nums === null || nums.length === 0) return
  // 慢指針 slow 初始為 0
  let slow = 0
  // 快指針 fast 初始為 0
  for(let fast=0; fast< nums.length; fast++){
    if(nums[fast] !== 0 ){
      let temp
        temp = nums[fast] 
        nums[fast] = nums[slow]
        nums[slow] = temp
        slow++
        // console.log('nums[fast]:'+nums[slow],'nums[fast]:'+nums[slow],'temp:'+temp);
    }
  }
  return nums
};
console.log(moveZeroes(nums));
console.log(moveZeroes(nums1));
console.log(moveZeroes(nums2));
console.log(moveZeroes(nums3));