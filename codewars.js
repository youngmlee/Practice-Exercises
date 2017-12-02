// Format = question, my solution, codewars solution //

// 5 kyu problems //

/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

const moveZeros = function (arr) {
  let zeroCounter = 0
  const final = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      final.push(arr[i])
    } else {
      zeroCounter += 1
    }
  }
  for (let j = 1; j <= zeroCounter; j++) {
    final.push(0)
  }

  return final
}

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}

// 6 kyu problems //

/* Multiples of 3 or 5: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. */

function solution(number){
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// 7 kyu problems //

/* Vowel Count: Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
  var vowelsCount = 0;
  var vowels = "a e i o u".split(" ");
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (vowels.indexOf(char) !== -1) {
      vowelsCount += 1;
      }
    }
  return vowelsCount;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

/* Get the Middle Character: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. */

function getMiddle(s) {
  if (s.length === 1) {
    return s;
  }
  var mid = (s.length / 2);
  if (Number.isInteger(mid)) {
    return s.slice((mid - 1), mid + 1);
  } else if (!Number.isInteger(mid)) {
    var jay = Math.floor(mid);
    return s.slice(jay, (jay + 1));
  }

}

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

/* Disemvowel Trolls: Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

function disemvowel(str) {
  var vowels = 'aeiou'.split('');

  return str.split('').filter(function(x) {
    return vowels.indexOf(x.toLowerCase()) === -1;
  }).join('');
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

/* You're a Square!: A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples

isSquare(-1) // => false
isSquare( 3) // => false
isSquare( 4) // => true
isSquare(25) // => true
isSquare(26) // => false */

var isSquare = function(n){
  var sqRt = Math.sqrt(n);
  if (Number.isInteger(sqRt)) {
    return true;
  }
  else {
    return false;
  }
}

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// 8 kyu problems //

/* Even or Odd - Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

function even_or_odd(number) {
  if (number % 2 === 0) {
    return ("Even")
  } else {
    return ("Odd")
  }
}

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

/* Opposite number - Return opposite number */

function opposite(number) {
  return number * -1
}

function opposite(number) {
  return(-number);
}

/* Jenny's Secret Message: Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

Test.describe("Jenny's greeting function", function(){
  Test.it("should greet some people normally",function(){
    Test.assertEquals(greet("Jim"), "Hello, Jim!");
    Test.assertEquals(greet("Jane"), "Hello, Jane!");
    Test.assertEquals(greet("Simon"), "Hello, Simon!");
  });
  Test.it("should greet Johnny a little bit more special",function(){
    Test.assertEquals(greet("Johnny"), "Hello, my love!");
  });
}); */

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}

function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

/* Convert a Number to a String: We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:

numberToString(123); // returns '123';`
numberToString(999); // returns '999';` */

function numberToString(num) {
  var n=num.toString();
  return n;
}

function numberToString(num) {
  return num.toString();
}

/* Counting Sheep: Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true] */

function countSheeps(arrayOfSheep) {
  var count = 0;
  for (var i = 0; i < arrayOfSheep.length; i++) {
    var sheep = arrayOfSheep[i];
    if (sheep === true) {
      count += 1;
    }
  }
  return count;
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

/* Return Negative: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
Notes:

The number can be negative already, in which case no change is required.
Zero (0) can't be negative, see examples above. */

function makeNegative(num) {
  if (num === 0 || num < 0) {
    return num;
  };
  if (num > 0) {
    return num * -1;
  };
}

function makeNegative(num) {
  return -Math.abs(num);
}

/* Convert boolean values to strings 'Yes' or 'No': Given: a boolean value

Return: a 'Yes' string for true and a 'No' string for false */

function boolToWord( bool ){
  if (bool === true) {
  return "Yes";
  };
  if (bool != true) {
  return "No"
  };
}

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

/* String Repeat: Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

function repeatStr (n, s) {
  var strArr = []
  for (var i = 0; i < n; i++){
    strArr.push(s);
  }
  return strArr.join("");
}

function repeatStr (n, s) {
  return s.repeat(n);
}

/* Square(n) Sum: Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

For example:

squareSum([1, 2, 2]); // should return 9 */

function squareSum(numbers){
  var sum = 0;
  for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var squared = number * number;
    sum += squared;
    }
  return sum;
}

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

/* Convert a String to a Number!: We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples

stringToNumber("1234") == 1234
stringToNumber("605" ) == 605
stringToNumber("1405") == 1405
stringToNumber("-7"  ) == -7 */

var stringToNumber = function(str){
  var num = parseInt(str);
  return num;
}

var stringToNumber = function(str){
  return +str;
}

/* Sum of positive: You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: array may be empty, in this case return 0. */

function positiveSum(arr) {
  var sum=0;
  for(var i=0;i<arr.length;i++) {
    if(arr[i]>0) {
      sum+=arr[i];
    }
  return sum;
}

function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

/* A Needle in the Haystack: Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle */

function findNeedle(haystack) {
  for (var i=0; i<haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return 'found the needle at position ' + i;
    }
  }
}

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

/* Are you playing banjo?: Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo"
name + " does not play banjo"
Names given are always valid strings. */

function areYouPlayingBanjo(name) {
  var rletter = "R r".split(" ")
  for (var i = 0; i<name.length; i++) {
    var letters = name[i];
    if (rletter.indexOf(letters[0]) !== -1) {
      return name + " plays banjo";
    } else {
      return name + " does not play banjo";
    }
  }
}

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

/* Grasshopper: Summation: Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 */

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}
