
/**
 * @param {number[]} heights
 * @return {number}
 */

const heights = [1,1,4,2,1,3];
// let heights = [5,1,2,3,4];

var heightChecker = function(heights) {
  let newHeights= heights.slice(0).sort(function(a, b) {
    return a - b;
  });
  // 試著解構
  let notSameCount = 0;

  for(let i=0; i<= heights.length; i++){
    if(heights[i] !== newHeights[i]){
      notSameCount++;
    }
  }
  return notSameCount
};
let result = heightChecker(heights)
console.log(result);

// Runtime: 104 ms
// Memory Usage: 38.6 MB