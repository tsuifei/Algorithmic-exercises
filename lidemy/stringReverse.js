/*
字串反轉
*/
function stringReverse(str) {
  let result = ''
  for (var i = str.length - 1; i > -1; i--) {
    result += str[i]
  }
  return result
}

str = 'Tracy&Philippe'
console.log(stringReverse(str));