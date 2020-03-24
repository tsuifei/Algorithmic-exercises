/* 刪除特定字元*/

function deleteSpecificCharacters(str, char) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== char) {
      result += str[i]
    }
  }
  return result
}