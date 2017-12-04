// Format = question, my solution, coderbyte solution //

// Easy Difficulty //

/* Longest Word: Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
Sample Test Cases
Input:"fun&!! time"
Output:"time"

Input:"I love dogs"
Output:"love" */

function LongestWord(sen) {
    const arr = sen.split(' ')
    let longestWord = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }
    }
    return longestWord
}

/* Simple Adding: Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
Sample Test Cases
Input:12
Output:78

Input:140
Output:9870 */

function SimpleAdding(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
      sum += i
  }
  return sum;
}

/* First Reverse: Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
Sample Test Cases
Input:"coderbyte"
Output:"etybredoc"

Input:"I Love Code"
Output:"edoC evoL I" */

function FirstReverse(str) {
  const strArr = str.split('')
  const reversedArr = strArr.reverse()
  return reversedArr.join('')
}

/* Check Nums: Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.
Sample Test Cases
Input:3 & num2 = 122
Output:"true"

Input:67 & num2 = 67
Output:"-1" */

function CheckNums(num1,num2) {
  if (num2 > num1) {
    return "true"
  }
  else if (num2 === num1) {
    return "-1"
  }
  else {
    return "false"
  }
}

/* First Factorial: Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer.
Sample Test Cases
Input:4
Output:24

Input:8
Output:40320 */

function FirstFactorial(num) {
  let final = 1
  for (let i = 1; i <= num; i++) {
    final *= i
  }
  return final;
}

/* Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Sample Test Cases
Input:"hello*3"
Output:"Ifmmp*3"

Input:"fun times!"
Output:"gvO Ujnft!" */

function LetterChanges(str) {
  const alphaArr = ('abcdefghijklmnopqrstuvwxyz').split('')
  const vowels = 'aeiou'
  const strArr = str.split('')
  const newWordArr = []
  const capNewWordArr = []
  for (let i = 0; i < strArr.length; i++) {
    const letter = strArr[i]
    if (alphaArr.indexOf(letter) !== -1) {
      newWordArr.push(alphaArr[(alphaArr.indexOf(letter) + 1)])
    }
    else {
      newWordArr.push(letter)
    }
  }
  for (let j = 0; j < newWordArr.length; j++) {
    const newLetter = newWordArr[j]
    if (vowels.indexOf(newLetter) !== -1) {
      capNewWordArr.push(newLetter.toUpperCase())
    }
    else {
      capNewWordArr.push(newLetter)
    }
  }
  return capNewWordArr.join('')
}

// Medium Difficulty //

// Hard Difficulty //
