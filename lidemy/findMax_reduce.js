const arr = [2,6,9,0,1,5,3,7]
/*
accumulator 累加器, currentValue 當前值
 */
function findMax(accumulator, currentValue){
  if(currentValue > accumulator){
    accumulator = currentValue
  }
  console.log(`accumulator:${accumulator}/currentValue:${currentValue}`);
  return accumulator
}

const max = arr.reduce(findMax,0) // 從 index 0 開始找
console.log(max); 

/*
reduce 可對陣裡里的元素進行累加，
*/