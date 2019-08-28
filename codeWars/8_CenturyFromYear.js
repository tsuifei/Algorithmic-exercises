/* Century From Year
https://www.codewars.com/kata/century-from-year
Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
Hope you enjoy it .. Awaiting for Best Practice Codes
*/

// solution 
function century(year) {
    let century = year / 100
    if (year % 100 === 0) {
        return century
    } else if (year <= 999) {
        return Math.round(century)
    }
    return Math.floor(century) + 1
}
console.log(century(852879))
    /*
    Math.round() 四捨五入
    Math.floor() 取小於這個數的最大整數
    Math.ceil() 取大於這個數的最小整數
     */
    // 其他solution
    // function century(year) {
    //     return (year + 99) / 100 | 0;
    //   }