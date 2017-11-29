// Format = question, my solution, leetcode solution //

// Easy Difficulty //

/* Reverse String: Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh". */

var reverseString = function(s) {
    var arr = s.split('')
    var reversed = arr.reverse()
    return reversed.join('')
};

/* Fizz Buzz: Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
] */

var fizzBuzz = function(n) {
  const finalArr = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      finalArr.push('FizzBuzz')
    }
    else if (i % 3 === 0) {
      finalArr.push('Fizz')
    }
    else if (i % 5 === 0) {
      finalArr.push('Buzz')
    }
    else {
      finalArr.push(i.toString())
    }
  }
  return finalArr
};

// Medium Difficulty //

// Hard Difficulty //
