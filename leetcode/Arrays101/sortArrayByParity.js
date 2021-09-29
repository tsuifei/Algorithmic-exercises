/**
 * 
 * 
 * Input: nums = [3,1,2,4]
 * Output: [2,4,3,1]
 * Input: nums = [0]
 * Output: [0]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
  if(nums === null || nums.length === 0) return
  
  // 慢指針 slow 初始為 0
  let slow = 0
  
  // 快指針 fast 初始為 0
  for(let fast=0; fast< nums.length; fast++){
    if(nums[fast] %2 == 0 ){
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

nums = [3,1,2,4]
console.log(sortArrayByParity(nums));