/**
 * 給兩個參數：陣列、指定值
 * 以就地修改的方式，刪除重複的值，並回傳修改後的陣列長度
*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     let i = 0;
//     for(let j = 0; j < nums.length; j++){
//         if(nums[j] !== val) {
//            nums[i] = nums[j]
//         }
//     }
//     return i
// };

var removeElement = function(nums, val) {
  while (nums.includes(val)){
      nums.splice(nums.indexOf(val),1);
  }
  return nums.length;
};


// var removeElement = function(nums, val) {
//   let numsLength = 0
//   for(let i =0 ; i < nums.length; i++){
//     if(nums[i] !== val){
//       nums[numsLength] = nums[i]
//       numsLength++
//     }
//   }
//     return numsLength;
// };
