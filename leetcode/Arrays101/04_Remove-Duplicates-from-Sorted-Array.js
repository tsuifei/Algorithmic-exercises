/**
 * 給兩個參數：陣列(已排好序)
 * 以就地修改的方式，刪除重複的值，並回傳修改後的陣列長度
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

// solution.01
var removeDuplicates = function(nums) {

  for(let i=0; i<nums.length-1; i++){
  // console.log(nums[i],nums)
    if(nums[i] == nums[i+1]){
      // 移除元素並向前移動一個位置
      nums.splice(i,1);
      i--
    }
  }
return nums.length
};

// solution.02
var removeDuplicates = function(nums) {
  if(!Array.isArray(nums)) return
  let j=0
  for(let i=1; i<nums.length; i++){
      if(nums[i] !== nums[j]){
          j++
          nums[j] = nums[i] 
      }
  }
  return j+1
}

// solution.03
var removeDuplicates = function(nums) {
    if(!Array.isArray(nums)) return
    for(let i=0; i<nums.length-1; i++){
    // console.log(nums[i],nums)
      if(nums[i] == nums[i+1]){
        // 移除元素並向前移動一個位置
        nums.splice(i,1);       
        i--
      }
    }
  return nums.length
}
// solution.04
var removeDuplicates = function(nums) {
  if(nums.length === 0 ) return 0
  let pointer1 = 0
  for(let pointer2 = 1; pointer2< nums.length; pointer2++){
    if(nums[pointer1] !== nums[pointer2]){
    pointer1++;
    nums[pointer1] = nums[pointer2]
  }		
  }
  return pointer1 +1		
};

const nums = [0,1,0,3,12]
var result = removeDuplicates(nums)
console.log(result);