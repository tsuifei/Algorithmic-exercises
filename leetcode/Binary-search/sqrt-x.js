/**
 * Given a non-negative integer x, compute and return the square root of x.
 * 給一個不是負數的整數 X，計算並回傳 X 的平方根
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
由於回傳的數字型態為整數，小數位被截斷，只回傳整數的部份
Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
不可使用內建的函式

Example 1:
Input: x = 4
Output: 2
Example 2:

Example 2
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

思路：把 x 當作一個 Array，開平方數不會超過一半（0-4例外）
 */


/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    
  if (x === 0) {
    return 0;
  } else if (x < 4) {
    return 1;
  }
  // 1,2,3,4,5,6,7,8
  // 1,2,3,4,5

  let left = 1;
  right = x / 2 + 1;
  console.log('left:'+ left);
  console.log('right:'+ right);
  while (left < right) {
    let mid = left + Math.floor((right - left)/2); 
    console.log('mid:'+ mid);

    if(mid * mid === x ) {
      return mid
    } else if (mid * mid > x) { 
      right = mid + 1 ;  
    } else {
      left = mid+1; 
    }
  }
  return left;
};

console.log(mySqrt(8));


/*
Kira 的
var mySqrt =function(x){
  let left = 1;
  let right = x;
  
  if(x < 2) return x;
  while(left < right){
    const mid = left + Math.floor((right - left) / 2));
    if(mid * mid === x) return mid;
    else if (mid * mid > x) right = mid + 1;
    else left = mid;
  }
  return left
}

另一範例
var mySqrt = function(x) {
  if (x === 0) {
    return 0;
  } else if (x < 4) {
    return 1;
  }
  let left = 1;
  right = x / 2 + 1;
  while (left < right) {
    let mid = (left + right + 1) >>> 1;  // 取中位数的上边界
    let square = mid * mid;
    if (square > x) { 
      right = mid - 1;  // 因为答案是取地板，因此要抛弃掉右边的值，
    } else {
      left = mid;      // 取上边界，才能用left=mid，不然会死循环
    }
  }
  return left;
};

作者：joeyzhouyicheng
链接：https://leetcode-cn.com/problems/sqrtx/solution/js-by-joeyzhouyicheng-6/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/