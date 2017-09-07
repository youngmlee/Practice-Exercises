/* eslint-disable no-unused-vars */

function longest(array) {
 var longest = ''
 for (var i = 0; i < array.length; i++) {
   var string = array[i]
   if (string.length > longest.length) {
     longest = string
   }
 }
 return longest
}

function flip(arr) {
var newArr = []
for (var i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i])
}
return newArr
}

//Ignores spaces and uppercase in original string
function isPalindrome(str) {
    var lowercaseStr = str.toLowerCase()
    var noSpacesLowercaseStr = lowercaseStr.split(' ')
    var newStr = noSpacesLowercaseStr.join('')
    var flipArr = []
    for (var i = newStr.length - 1; i >= 0; i--) {
        var letter = newStr[i]
        flipArr.push(letter)
    }
    var flipped = flipArr.join('')
    if (newStr === flipped) {
        return true
    }
    else {
        return false
    }
}
