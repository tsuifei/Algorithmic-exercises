/*
The Feast of Many Beasts
https://www.codewars.com/kata/the-feast-of-many-beasts
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
只有一條規則：菜餚必須以與動物名稱相同的字母開頭和結尾。 
例如，大藍鷺帶來大蒜naan，山雀帶來巧克力蛋糕。
寫一個功能盛宴，將動物的名字和菜作為參數，並返回真或假，以表明是否允許野獸將菜帶到盛宴。
假設野獸和菜總是小寫的字符串，每個字符串至少有兩個字母。 
野獸和菜餚可能包含連字符和空格，但這些不會出現在字符串的開頭或結尾。 它們不包含數字。
 */

// solution

function feast(beast, dish) {
    beast = beast.split('')
    dish = dish.split('')
    if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
        return true
    } else
        return false
}
console.log(feast('great heron', 'garlic naan'))

// 別人的solution
// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//   }