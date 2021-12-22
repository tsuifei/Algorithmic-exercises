let arr = [12, 4, 11, 15];
let target = 26;

let twoSum = function(arr, target){
  let box = {};
  for(let i =0 ; i < arr.length; i++){
    if(box[target - arr[i]] >= 0){
      console.log(box[target - arr[i]] );
      // console.log(box,box[arr[i]],i );
      return [box[target - arr[i]],i]
    }
    return box[arr[i]] = i;
  }
}
console.log(twoSum(arr));