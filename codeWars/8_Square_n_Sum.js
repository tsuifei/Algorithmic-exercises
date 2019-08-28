/* Square(n) Sum
 * https://www.codewars.com/kata/square-n-sum
 * Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.
 * For example:
 * squareSum([1, 2, 2]); // should return 9
 */

//solution
function squareSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i] * numbers[i]
        sum = sum + n // sum的值都會加上n的值並且累加
    }
    return sum
}
console.log(squareSum([0, 3, 4, 5]))

// l'autre solution
function squareSum2(numbers) {
    var sum = 0;
    numbers.forEach(function(n) {
        sum += n * n
    });
    return sum;
}