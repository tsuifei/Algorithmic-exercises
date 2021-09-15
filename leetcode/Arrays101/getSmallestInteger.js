function getSmallestInteger(arr){
	arr = arr.sort(function(a, b) {return a - b;});
  let ok = 1;
	for(let i = 0; i < arr.length;i ++){
    if(arr[i] < 1 || arr[i] == arr[i+1]){
      arr.splice(i,1)
      i--
    }
    // [0,1,1,3,6,-2,4,1,2] --> [,1,2,3,4,6]
    }
    if(arr.length === 0){
      return ok
    }
   
    console.log(arr);
    for(let i = 0; i < arr.length+1;i++){
      console.log('arr[i]:'+arr[i]);
      console.log('i:'+ parseInt(i+1));
      if(arr[i] !== parseInt(i+1) || arr[i] == undefined){
        return parseInt(i+1)
      } 
       // [1,2,3,4,6] -->  // [1,2,3,4,6, ]
                               0,1,2,3,4,5 
    }

}

const arr = [1,2,3]
const arr1 = [0,1,1,3,6,-2,4,1,2]
const arr2 = [1,3,6,4,1,2]
const arr3 = [-1,-2]

let result = getSmallestInteger(arr)
console.log(result);


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