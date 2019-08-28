/* Convert a Number to a String!
https://www.codewars.com/kata/convert-a-number-to-a-string
We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`
*/

// solution
function numberToString(num) {
    // Return a string of the number here!
    return num.toString()
}
console.log(typeof(numberToString(42)))

//其他人的solution 原來用String就可以了...
function numberToString2(num) {
    return String(num);
}
console.log(typeof(numberToString2(42)))