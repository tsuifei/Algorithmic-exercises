// fakeBin
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.

function fakeBin(x) {
    let split = x.split('')
    let result = ''
    for (let i = 0; i < split.length; i++) {
        if (split[i] < 5) {
            result += 0
        } else {
            result += 1
        }
    }
    return result
}

console.log(fakeBin("2019823546"));
console.log(fakeBin("9803211"));