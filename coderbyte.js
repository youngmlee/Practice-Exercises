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

// Medium Difficulty //

// Hard Difficulty //
