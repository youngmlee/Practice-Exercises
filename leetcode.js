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

/* Add Strings: Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly. */

var addStrings = function(num1, num2) {
  const number1 = +num1
  const number2 = +num2
  return (number1 + number2).toString()
};

// Medium Difficulty //

// Hard Difficulty //
