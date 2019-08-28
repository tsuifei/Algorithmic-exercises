// Friend or Foe?
// https://www.codewars.com/kata/friend-or-foe/train/javascript
// Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, 
// you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not... 
// Ex: Input = ["Ryan","Kieran", "Jason", "Yous"], 
// Output = ["Ryan", "Yous"] 
// Note: keep the original order of the names in the output.
// 製作一個過濾字符串列表的程序，並返回一個只包含您朋友姓名的列表。 如果一個名字中只有4個字母，你可以確定它必須是你的朋友！ 否則，你可以肯定他不是...... 
// 例如：輸入= [“Ryan”，“Kieran”，“Jason”，“Yous”]，輸出= [“Ryan”，“Yous”] 注意：保持輸出中名稱的原始順序。

/*
 * 這題是和Thomas一起解的，因語言關係解題時不太明白，好在多讀幾次就明白了～謝謝Thomas
 */
function friend(friends) {
    let myFriends = [] // 裝新的array
    let j = 0
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 6) {
            //如果條件相符，就把它丟進myFriends的array裡
            myFriends[j] = friends[i]
            j++
        }
    }
    return myFriends
}
console.log(friend(['Ryan', "Ayda", "Jason", "Thomas"]))

//別人的 Solution
// function friend(friends){
//     return friends.filter(n => n.length === 4)
// 又學了一個filter() 直接可把要的東西抓出來啊！
//   }