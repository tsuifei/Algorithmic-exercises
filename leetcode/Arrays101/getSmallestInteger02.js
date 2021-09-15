

function getSmallestInteger(arr){
  if(arr.length === 0) return 1;
  // 排序
  arr = arr.sort(function(a, b) {return a - b;});
  console.log(arr);
  // 計算正確的數字
  let shortfall = 0;
  
  for(let i = 0; i<arr.length;++i){
    
    // if(isPositiveInteger(parseInt(arr[i])) !== true && arr[i] < 0){
      for(let j=i+1; j < arr.length; j++){
        if(arr[i] === arr[j] || arr[j] < 0){
          arr.splice(j,1)
          j--
        }
      // }
      
      // console.log(Number(arr[i+1]));
      // console.log(Number(arr[i+1]) - Number(arr[i]));
      // if(Number(arr[i+1]) - Number(arr[i]) === 1 
      //   ){
      //     console.log(arr[i]);
      //   shortfall++
      // } 
    }
    console.log(arr);
    // if(parseInt(arr[i]+1) === arr[parseInt(i)+1]){
    //   console.log('arr[i]+1:'+ parseInt(arr[i]+1));
    //   console.log('arr[i+1]:'+ arr[parseInt(i)+1]);
    //   // shortfall ++
    //   if(arr[parseInt(i)+2] === 'undefined'){
    //     return arr[parseInt(i)+2]
    //   }
    // }
    
    // shortfall= arr[parseInt(i)+2];
    // 如果元素為負數 或 連續元素和下個元素一樣(重複)
    // if(arr[i] < 1 || arr[i] == arr[i+1]){
    //   // i 前進
    //   i++
    // } else {
    //   shortfall++
    // }
    // console.log('arr[i]:'+arr[i]);
    // console.log('i:'+ parseInt(i+1));

    // if(arr[i] !== i+1 || arr[i] === 'undefined') {
    //   // console.log(i+1);
    //   // shortfall = arr[i]
    //   return i
      
    // } else {
    //   // shortfall++
    // }
    
  }
  console.log('shortfall:'+ Number(shortfall));
}
const arr = [1,2,3]
const arr1 = [0,1,1,3,6,-2,4,1,2]
const arr2 = [1,3,6,4,1,2]
const arr3 = [-1,-2]

let result = getSmallestInteger(arr1)
console.log(result);


function isPositiveInteger(s){//是否為正整數
  var re = /^[0-9]+$/ ;
  return re.test(s)
}

// function fn(arr){
//   var result = [],
//       i = 0;
//   result[i] = [arr[0]];
//   arr.reduce(function(prev, cur){
//     cur-prev === 1 ? result[i].push(cur) : result[++i] = [cur];
//     return cur;
//   });
//   return result;
// }
// console.log(fn(arr1));