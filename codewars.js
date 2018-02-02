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

/* Stop gninnipS My sdroW!: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test" */

function reverse(s){
  return s.split("").reverse().join("");
}

function spinWords(str){
  var arr = []
  var split = str.split(' ')
  for (let i = 0; i < split.length; i++) {
    var word = split[i]
    if (word.length < 5) {
      arr.push(word)
    }
    else if (word.length >= 5) {
      var reversed = reverse(word)
      arr.push(reversed)
    }
  }
  var final = arr.join(' ')
  return final
}

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

/* Equal Sides of an Array: You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
An empty array should be treated like a 0 in this problem. */

function findEvenIndex(arr) {
  var answer = 0;
  for (var i = 0; i < arr.length; i++) {
    var sum1 = arr.slice(0, i).reduce(function (a, b) {
      return a + b;
    }, 0);
    var sum2 = arr.slice(i+1, arr.length).reduce(function (a, b) {
      return a + b;
    }, 0);

    if (sum1 == sum2) {
      return i;
    };
  }
  return -1;
}

function findEvenIndex(arr) {
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}

/* Reversed Words: Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The" */

function reverseWords(str){
  var arr = []
  var split = str.split(' ')
  for (let i = split.length - 1; i>=0; i--) {
    arr.push(split[i])
  }
  var joined = arr.join(' ')
  return joined
}

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
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

/* Square Every Digit: Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer */

function squareDigits(num){
  var str = num.toString();
  var split = str.split("");
  var newArr = [];
  var finalArr = [];
  for (var i = 0; i < split.length; i++) {
    var number = split[i];
    var toNumber = +number;
    newArr.push(toNumber);
  };

  for (var j = 0; j < newArr.length; j++) {

    var numberSq = (newArr[j] * newArr[j]);
    finalArr.push(numberSq);

  }
  return +finalArr.join("");
}

function squareDigits(num){
  var string = num.toString();
  var results = [];
  for (var i = 0; i < string.length; i++){
    results[i] = string[i] * string[i];
  }
  return Number(results.join(''));
};

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

/* Sum of Numbers: Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2 */

function GetSum( a,b ) {
  var sum = 0;
  if (a <= b) {
    for (var i = a; i <=b; i++) {
      sum += i;
    }
  }
  else if (b <= a) {
    for (var j = b; j <=a; j++) {
      sum +=j;
    }
  }
  return sum;
}

function GetSum(a,b) {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

/* List Filtering: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

function filter_list(l) {
  var res = [];
  for (var i = 0; i < l.length; i++) {
    var el = l[i];
    if (typeof l[i] === "number") {
      res.push(l[i]);
    }
  }
  return res;
}

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

/* Shortest Word: x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
  var words = s.split(" ");
  var shortL = 99999;
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var wordL = words[i].length;
    if (wordL < shortL) {
      shortL = wordL;
    }
  }
  return shortL;
}

function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}

/* Credit Card Mask: Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!" */

function maskify(cc) {
  var newArr = [];
  var chars = cc.split("");
  for (var i = 0; i < chars.length - 4; i++) {
    newArr.push("#");
  };
  var lastFour = cc.slice(-4);
  var hashtags = newArr.join("");
  var final = hashtags + lastFour;
  return final;
}

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

/* The Coupon Code: Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Your mission:
Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.

A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014" */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)) {
    return true;
  } else {
    return false;
  }
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

/* Folding Your Way to the Moon: Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

Note: Of course you can't do half a fold. You should know what this means ;P

Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). */

function foldTo(distance) {
  var folds = 0;
  var dist = 0.0001;
  if (distance <= 0) {
    folds = null;
  }
  while (distance > dist) {
    dist = dist * 2;
    folds += 1;
  }
  return folds;
}

function foldTo(n) {
  return n > 0 ? Math.max(0, Math.ceil(Math.log2(1e4 * n))) : null;
}

/* 7 Ate 9: Write a function that removes every lone 9 that is inbetween 7s.

sevenAte9('79712312') => '7712312'
sevenAte9('79797') => '777' */

function sevenAte9(str){
  var split = str.split('')
  var finalArr = []
  for (let i = 0; i < split.length; i++) {
    if (split[i] === '9' && split[i-1] === '7' && split[i+1] === '7') {
      continue;
    }
    else {
      finalArr.push(split[i])
    }
  }
  var final = finalArr.join('')
  return final
}

function sevenAte9(str){
  return str.replace(/79(?=7)/g, '7');
}

/* Unique Sum: Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

For example:

[ 1, 2, 3] ==> 6

[ 1, 3, 8, 1, 8] ==> 12

[ -1, -1, 5, 2, -7] ==> -1

[] ==> null
Good Luck! */

function uniqueSum(lst){
  var sum = null
  var unique = lst.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  })
  for (let i = 0; i < unique.length; i++) {
    sum += unique[i]
  }
  return sum
}

function uniqueSum(lst){
  return lst.length > 0 ? [...new Set(lst)].reduce((s,n)=> s + n, 0) : null
}

/* Alternate Capitalization: Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */

function capitalize(s){
  var final = []
  var evenCap = []
  var oddCap= []
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenCap.push(s[i].toUpperCase())
      oddCap.push(s[i])
    }
    else if (i % 2 !== 0) {
      evenCap.push(s[i])
      oddCap.push(s[i].toUpperCase())
    }
  }
  var evenWord = evenCap.join('')
  var oddWord = oddCap.join('')
  final.push(evenWord, oddWord)
  return final
};

function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};

/* Pull Your Words Together Man!: Your friend Robbie has successfully created an AI that is capable of communicating in English!

Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:

["this","is","a","sentence"]
Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.

Your function should:

Capitalise the first letter of the first word.
Add a period (.) to the end of the sentence.
Join the words into a complete string, with spaces.
Do no other manipulation on the words.
Here are a few examples of what your function should do:

Input	Output
["i", "am", "an", "AI"]
"I am an AI."
["FIELDS","of","CORN","are","to","be","sown"]
"FIELDS of CORN are to be sown."
["i'm","afraid","I","can't","let","you","do","that"]
"I'm afraid I can't let you do that." */

function sentencify(words) {
  var joined = words.join(' ') + '.'
  var first = joined.slice(0, 1)
  var firstUpper = first.toUpperCase()
  var final = firstUpper + joined.slice(1)
  return final
}

function sentencify(words) {
  return words.join(' ').replace(/^[a-z]/,m=>m.toUpperCase())+'.'
}

/* Move All Vowels: Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples

"day"    ==>  "dya"
"apple"  ==>  "pplae" */

function moveVowel(input) {
  var vowels = []
  var final = []
  var split = input.split('')
  split.forEach(function(ele) {
    if ('aeiou'.indexOf(ele) !== -1) {
      vowels.push(ele)
    } else {
      final.push(ele)
    }
  })
  var realFinal = final.concat(vowels)
  return realFinal.join('')
}

function moveVowel(input) {
  var cs = "";
  var vs = "";
  for(var i=0;i<input.length;i++)
  {
    if("aeiouAEIOU".indexOf(input.charAt(i)) == -1)
    {
      cs += input.charAt(i);
    }
    else
    {
      vs += input.charAt(i);
    }
  }
  return cs + vs;
}

/* Sum of all the multiples of 3 or 5: Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10) */

function findSum(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
  }
  return sum;
}

/* Summy: Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

Example

summy("1 2 3")  ==> 6
Good luck! */

function summy(stringOfInts){
  const splitArr = stringOfInts.split(' ')
  const numArr = splitArr.map(x => +x)
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}

const summy = s => s.split(' ').map(Number).reduce((a,b)=>a+b,0)

/* Magic Sum of 3s: Details
Solutions
Discourse (15)
Add to Collection|Share this kata:
The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. Write a function magic_sum which accepts an array of integers and returns the sum.

Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

If the sum cannot be calculated, 0 should be returned. */

function magicSum(numbers) {
  let sum = 0
  if ((numbers === []) || numbers === null) {
    return sum
  }
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2 !== 0) && (numbers[i].toString().indexOf('3') !== -1)) {
       sum += numbers[i]
     }
    }
  return sum;
}

function magicSum(a) {
  return Array.isArray(a) ? a.reduce((a,b)=>a+((''+b).includes('3') && b%2 ? b : 0),0) : 0
}

/* Categorize New Member: The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List>

Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example Output
["Open", "Open", "Senior", "Open", "Open", "Senior"] */

function openOrSenior(data){
  const output = []
  for (let i = 0; i < data.length; i++) {
    if ((data[i][0] >= 55) && (data[i][1] > 7)) {
      output.push("Senior")
    } else {
       output.push("Open")
     }
  }
  return output
}

function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
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

/* Basic Mathematical Operations: Your task is to create a function - basic_op().

The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

Examples:

basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7 */

function basicOp(operation, value1, value2) {
  var final = eval(value1 + operation + value2);
  return final;
}

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}

/* Function 1 - hello world: Make a simple function called greet that returns the most-famous "hello world!".

Style Points

Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends? */

function greet() {
  return "hello world!";
}

/* Count by X: Create a function with two arguments that will return a list of length (n) with multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10] */

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

/* Double Char: Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  " */

function doubleChar(str) {
  var result = [];
  var chars = str.split("");
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    var repeatedChar = char + char;
    result.push(repeatedChar);
  }
  return result.join("");
}

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}

/* Number of people in the bus

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop. */

var number = function(busStops){
  var sum = null;
  for (var i = 0; i < busStops.length; i++) {
    var busStop = busStops[i];
    for (var j = 0; j < busStop.length; j++) {
      var peopleOn = busStop[0] - busStop[1];
      sum += peopleOn;
    }
  }
  return sum / 2;
}

var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}

/* You Can't Code Under Pressure #1: Code as fast as you can! You need to double the integer and return it. */

function doubleInteger(i) {
  return i * 2;
}

/* Sum Array

Write a method sum (sum_array in python, SumArray in C#) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

Examples

numbers = [1, 5.2, 4, 0, -1]
puts sum(numbers)
9.2
Assumptions

You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0. */

function sum (numbers) {
  var sum1 = 0;
  for (var i = 0 ; i < numbers.length ; i++) {
    sum1 += numbers[i];
  }
  return sum1;
};

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

/* Unfinished Loop - Bug Fixing #1

Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished For Loop! */

function createArray(number){
  var newArray = [];
  for(var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

/* How Many Lightsabers Do You Own?: Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

No starting help here -- you'll need to know how to write a function that accepts a parameter and returns a value based on that parameter.

howManyLightsabersDoYouOwn("anyone else") \\ should === 0
howManyLightsabersDoYouOwn("Zach") \\ should === 18 */

function howManyLightsabersDoYouOwn(name) {
  if (name === "Zach") {
    return 18;
  } else {
    return 0;
  }
}

function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}

/* Do I Get a Bonus?: It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with '£' (JS and Java) or '$' (C#, C++, Ruby, Clojure, Elixir, PHP and Python). */

function bonusTime(salary, bonus) {
  if (bonus === true){
    return "£" + (salary*10).toString()
  }else{
    return "£" + salary.toString()
  }
}

function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}

/* Count the Monkeys!: You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example, if n = 10:

return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

function monkeyCount(n) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

function monkeyCount(n) {
  var monkeys = [];
  for(var i=1; i<n+1; i++){
    monkeys.push(i);
  }
  return monkeys;
}

/* Remove the Exclamation Marks: Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

/* DNA to RNA Conversion: Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a funciton which translates a given DNA string into RNA.

For example:

DNAtoRNA("GCAT") returns ("GCAU") */

function DNAtoRNA(dna) {
  var split1 = dna.split("T");
  var join1 = split1.join("U");
  return join1;
}

function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}

/* Reversing Words in a String: You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

reverse('Hello World') === 'World Hello'
reverse('Hi There.') === 'There. Hi' */

function reverse(string){
  var arr = [];
  var strArr = string.split(' ');
  for (var i = strArr.length-1; i>=0; i--) {
    arr.push(strArr[i]);
  }
  return arr.join(' ');
}

function reverse(string){
  return string.split(' ').reverse().join(' ');
}

/* How Old Will I Be 2099?: Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

Good Luck! */

function  calculateAge(num1, num2) {
  var age = num2 - num1;

  if ((num2 > num1) && age === 1) {
    return ("You are " + age + " year old.");
  } else if (num2 > num1) {
    return ("You are " + age + " years old.");
  }

  var yearsLeft = num1 - num2;
  if (num1 > num2 && yearsLeft === 1) {
    return ("You will be born in " + yearsLeft + " year.");
  }
  else if (num1 > num2) {
    return ("You will be born in " + yearsLeft + " years.");
  }

  if (num1 === num2) {
    return ("You were born this very year!");
  }
}


function  calculateAge(m, n) {
  if(m == n) return 'You were born this very year!';
  var year = Math.abs(m-n) == 1 ? 'year' : 'years';
  if(m < n) return "You are "+(n-m)+' '+year+' old.';
  if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
}

/* School Paperwork: Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need.

Example:
paperwork(5, 5) == 25
Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks! */

function paperwork(n, m) {
  if(n<0 || m<0) return 0;
  return n*m;
}

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

/* Grasshopper - Personalized Message: Personalized greeting

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message: case | return --- | --- name equals owner | 'Hello boss' otherwise | 'Hello guest' */

function greet (name, owner) {
  console.log("hey");
  if (name === owner) {
    return ("Hello boss");
  } else if (name !== owner) {
    return ("Hello guest");
  }
}

function greet (name, owner) {
  return name === owner ? 'Hello boss' :   'Hello guest';
}

/* Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string: Description:

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples

remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"*/

function remove(s){
  var split = s.split('!');
  var joined = split.join('')
  var final = joined + '!';
  return final;
}

function remove(s) {
  return s.replace(/!+/g, '') + '!';
}

/* Cockroach: The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

cockroachSpeed(1.08) == 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer. */

function cockroachSpeed(s) {
  return Math.floor(s*1000/36);
}

const cockroachSpeed = s => Math.floor(s / 0.036);

/* Grasshopper - Bug Squashing: Terminal game bug squashing

You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library that already has the functions below. Create a function named that calls the functions in the proper order.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move */

var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

/* Calculate Average: Write function avg which calculates average of numbers in given list.*/

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  var avg = (sum / array.length)
  return avg
}

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}

/* Convert number to reversed array of digits: Convert number to reversed array of digits

Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:

348597 => [7,9,5,8,4,3] */

function digitize(n) {
  var str = n.toString();
  var x = str.split("");
  var newArr = [];
  var finalArr = [];
  x.forEach(function (thing) {
    newArr.push(+thing);
  });
  for (let i = (newArr.length - 1); i >= 0; i--) {
    finalArr.push(+newArr[i])
  }
  return finalArr;
}

function digitize(n){
  return (n + '').split('').map(Number).reverse();
}

/* Remove String Spaces: Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x){return x.split(' ').join('')}

function noSpace(x){
  return x.replace(/\s/g, '');
}

/* I love you a little, a lot, passionately ... not at all: Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0. */

function howMuchILoveYou(nbPetals) {
  if(nbPetals % 6 === 0){
    return "not at all";
  } else if (nbPetals % 6 === 1){
    return "I love you";
  } else if (nbPetals % 6 === 2){
    return "a little";
  } else if (nbPetals % 6 === 3){
    return "a lot";
  } else if (nbPetals % 6 === 4){
    return "passionately";
  } else if (nbPetals % 6 === 5){
    return "madly";
  }
}

const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
]

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length]
}

/* Remove First and Last Character: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

function removeChar(str) {
  return str.slice(1, -1);
}

/* Make UpperCase: Write function makeUpperCase. */

function makeUpperCase(str) {return str.toUpperCase();}

const makeUpperCase = str => str.toUpperCase();

/* Array plus array: I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      sum += +arr1[i];
      sum += +arr2[i];
    }
    return sum;
  } else {
    for (let i = 0; i < arr2.length; i++) {
      sum += +arr1[i];
      sum += +arr2[i];
    }
    return sum;
  }
}

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

/* Count Odd Numbers below n: Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs! */

function oddCount(n){
  let oddCount = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      oddCount += 1
    }
  }
  return oddCount;
}

/* USD => CNY: Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

For Example:

  usdcny(15) // => '101.25 Chinese Yuan'
  usdcny(465) // => '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be reounded to the nearest hundreth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed) */

function usdcny(usd) {
  let yuan = (usd * 6.75).toFixed(2)
  return yuan.toString() + ' Chinese Yuan'
}

usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;

/* Is he gonna survive?: A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) */

function hero(bullets, dragons){
  return (bullets >= dragons * 2 ? true : false);
}

function hero(bullets, dragons){
  return bullets >= dragons * 2
}

/* Man in the West: A western man is tring to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.*/

function checkTheBucket(bucket){
  let def = false;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] === "gold") {
      def = true;
    }
  }
  return def
}

function checkTheBucket(bucket){
  return bucket.includes('gold');
}

/* Calculate Price Excluding VAT: Write a function that calculates the original product price, without VAT.

Example

If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1 */

function excludingVatPrice(price){
  if (price === null) {
    return -1;
  } else {
    return +(price/1.15).toFixed(2);
  }
}

function excludingVatPrice(price){
  return (price == null)? -1 : ((price/115)*100).toFixed(2)*1;
}

/* Who is going to pay for the wall?: Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is equal or less than two, it will return the name as is.*/

function whoIsPaying(name){
  let arr = []
  if (name.length <= 2) {
    arr.push(name)
    return arr;
  } else {
    arr.push(name, name.slice(0,2))
    return arr;
  }
}

function whoIsPaying(name){
  return (name.length>2)?([name, name.substr(0,2)]):[name];
}

/* Get the mean of an array: It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/

function getAverage(marks){
  let sum = 0
  marks.forEach(mark => sum += mark)
  return Math.floor(sum / marks.length)
}

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

/* Add Length: What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space. */

function addLength(str) {
  let finalArr = []
  const wordsArr = str.split(' ')
  for (let i = 0; i < wordsArr.length; i++) {
    finalArr.push(wordsArr[i] + ' ' + wordsArr[i].length);
  }
  return finalArr;
}

function addLength(str){
  return str.split(' ').map(function(v){return v+' '+v.length})
}

/* Digitize: Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9] */

function digitize(n) {
  let str = n.toString()
  const arr = str.split('')
  let finalArr = []
  arr.forEach(x => finalArr.push(+x))
  return finalArr
}

function digitize(n) {
  return String(n).split('').map(Number);
}

/* Find Maximum and Minimum Values of a List: Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

#Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0
#Notes

You may consider that there will not be any empty arrays/vectors. */

var min = function(list){
  return Math.min(...list)
}

var max = function(list){
  return Math.max(...list)
}

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
