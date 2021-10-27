// Third Maximum Number
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.


/**
 * @param {number[]} nums
 * @return {number}
 */

// const nums = [3,2,1] // Output: 1
const nums = [1,2] // Output: 2
// const nums = [2,2,3,1] // Output: 1
// const nums = [2,2,3,1,5,6] // Output: 

 var thirdMax = function(nums) {
  nums = [...new Set(nums)].sort(function(a, b) {
    return a - b;
  });;
  console.log(nums);
  if(nums.length < 3){
    return nums[nums.length-1]
  }
  else return nums[nums.length-3]

  return nums[0]
};

let result = thirdMax(nums)
console.log(result);

// Runtime: 88 ms
// Memory Usage: 40.7 MB