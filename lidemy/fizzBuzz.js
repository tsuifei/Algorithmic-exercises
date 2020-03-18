/* 
如果數字可被3整除，印出Fizz
如果數字可被5整除，印出Buzz
如果數字可被5和3整除，印出FizzBuzz
同時可被5和3整除 ＝ 被15整除
*/


function fizzBuzz(num) {
  if (typeof num !== 'number') return 'Not a Number'
  for (var i = 1; i <= num; i++) {
    // console.log(i);
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else console.log(i)

  }
}

// console.log(fizzBuzz(1));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(9));
// console.log(fizzBuzz(7));
// console.log(fizzBuzz(0));
console.log(fizzBuzz(16));
// console.log(fizzBuzz(null));