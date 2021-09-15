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

const nums = [0,1,0,3,12]
var result = removeDuplicates(nums)
console.log(result);