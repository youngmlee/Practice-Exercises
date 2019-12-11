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

/*Find the Odd Int

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


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

/* Ski Jump

You are a skier (marked below by the 'X'). You have made it to the Olympics! Well done.

\_\_\_X\_
\*\*\*\*\*\
\*\*\*\*\*\*\
\*\*\*\*\*\*\*\
\*\*\*\*\*\*\*\*\
\*\*\*\*\*\*\*\*\*\\.\_\_\_\_/
Your job in this kata is to calculate the maximum speed you will achieve during your downhill run. The speed is dictated by the height of the mountain. Each element of the array is a layer of the mountain as indicated by the diagram above (and further below). So for this example the mountain has a value of 5 (5 rows of stars). Speed is mountain height * 1.5.

The jump length is calculated by (mountain height * speed * 9) / 10. Jump length should be to two dp.

You must return the length of the resulting jump as a string in the following format:

Jump < 10 = 'X metres: He's crap!'
Jump > 10 && < 25 = 'X metres: He's ok!'
Jump > 10 && < 50 = 'X metres: He's flying!'
Jump > 50 = 'X metres: Gold!!'

In this case the right answer would be '33.75 metres: He's flying!'

Sadly it takes a lot of time to make arrays look like mountains, so the tests wont all look so nice. To give an example, the above mountain would look as follows in most cases:

[*****, ******, *******, ********, *********]
Not as much fun, eh? */

function skiJump(mountain){
  const height=mountain.length;
  const speed=height*1.5;
  const length=((height*speed*9)/10).toFixed(2);
  if (length<10) return `${length} metres: He's crap!`
  if (length<25) return `${length} metres: He's ok!`
  if (length<50) return `${length} metres: He's flying!`
  return `${length} metres: Gold!!`
}

/* Holiday II - Plane Seating

Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'. */

function planeSeat(a){
  const number = parseInt(a);
  const letter = a[a.length - 1];
  if (number > 60 || letter == 'I' || letter == 'J') return 'No Seat!!';
  return `${number > 20 ? number > 40 ? 'Back-' : 'Middle-' : 'Front-'}${letter > 'C' ? letter > 'F' ? 'Right' : 'Middle' : 'Left'}`;
}

function planeSeat(str){
  let num = +str.replace(/[a-z]/gi, '');
  let letter = str.replace(/[0-9]/gi, '').toLowerCase();

  if(num > 60 || letter === 'i' || letter === 'j') {
    return 'No Seat!!';
  }

  if(num >= 1 && num <= 20) {
    if(/[a-c]/gi.test(letter)) {
      return 'Front-Left';
    } else if(/[d-f]/gi.test(letter)) {
      return 'Front-Middle';
    } else {
      return 'Front-Right';
    }
  } else if(num >= 21 && num <= 40) {
    if(/[a-c]/gi.test(letter)) {
      return 'Middle-Left';
    } else if(/[d-f]/gi.test(letter)) {
      return 'Middle-Middle';
    } else {
      return 'Middle-Right';
    }
    
  } else if(num >= 41 && num <= 60) {
    if(/[a-c]/gi.test(letter)) {
      return 'Back-Left';
    } else if(/[d-f]/gi.test(letter)) {
      return 'Back-Middle';
    } else {
      return 'Back-Right';
    }
  }
}

/* Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"] */

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

var number = function(arr) {
var newArr = [];
  if (arr.length === 0) {
    return [];
  } else {
    for (var i = 0, len = arr.length; i < len; i += 1) {
      newArr.push((i + 1) + ': ' + arr[i]);
    }
  }
  return newArr;
}

/* The 12 Days of Christmas

Oh No!

The song sheets have been dropped in the snow and the lines of each verse have become all jumbled up.

Task
You have to write a comparator function which can sort the lines back into their correct order, otherwise Christmas will be cancelled!

Reminder: Below is what the final verse should look like

On the 12th day of Christmas my true love gave to me
12 drummers drumming,
11 pipers piping, 
10 lords a leaping, 
9 ladies dancing, 
8 maids a milking,
7 swans a swimming, 
6 geese a laying, 
5 golden rings, 
4 calling birds,
3 French hens, 
2 turtle doves and 
a partridge in a pear tree. */

var comparator = function(a,b) {
  const pos = ['On', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'a'];
  return pos.indexOf(a.split(' ')[0]) - pos.indexOf(b.split(' ')[0]);
}

song = [
"On the 12th day of Christmas my true love gave to me",
"12 drummers drumming,",
"11 pipers piping,",
"10 lords a leaping,", 
"9 ladies dancing,",
"8 maids a milking,",
"7 swans a swimming,", 
"6 geese a laying,", 
"5 golden rings,", 
"4 calling birds,",
"3 French hens,", 
"2 turtle doves and", 
"a partridge in a pear tree."
]

var comparator = (a, b) => song.indexOf(a) - song.indexOf(b)

/* The Baum-Sweet Sequence

Wikipedia: The Baum–Sweet sequence is an infinite automatic sequence of 0s and 1s defined by the rule:

bn = 1 if the binary representation of n contains no block of consecutive 0s of odd length;
bn = 0 otherwise;

for n ≥ 0.

Define a generator function baumSweet that sequentially generates the values of this sequence.

It will be tested for up to 1 000 000 values.

Note that the binary representation of 0 used here is not 0 but the empty string ( which does not contain any blocks of consecutive 0s ). */

function* baumSweet() {
  let n = -1;
  const MAX_SEQ_LENGTH = 1000000;
  
  while (++n < MAX_SEQ_LENGTH) {
    yield (n > 0 ? n : 1)
      .toString(2)
      .split('1')
      .filter(v => v.length % 2 !== 0)
      .length === 0
        ? 1
        : 0;
  }
}

/* How many days are we represented in a foreign country?

How many days are we represented in a foreign country?

My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a country. Every day that one or more colleagues are present in the country is a day that the company is represented. A single day cannot count for more than one day.

Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.

Example:

daysRepresented ([[10,17],[200,207]])
Returns 16 because there are two trips of 8 days, which add up to 16.

Happy coding and rank this kata if you wish ;-) */

function daysRepresented(trips) {
  const days = Array(365).fill(0);
  for ([a, b] of trips)
    for (let i = a - 1; i < b; i++)
      days[i] = 1;
  return days.reduce((a, b) => a + b);
}

/* Growth of a population

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02. */

function nbYear(p0, percent, aug, p) {
  for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}function nbYear(p0, percent, aug, p) {
    var count = 0;   
    while(p0<p){
        p0 += p0 * percent/100 + aug;
        count++;
    }
    return count;
}

/* Ten Green Bottles

Who knows the nursery rhyme Ten Green Bottles?

Lyrics:

Ten green bottles hanging on the wall,
Ten green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be nine green bottles hanging on the wall.

Nine green bottles hanging on the wall,
Nine green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be eight green bottles hanging on the wall. 

Eight green bottles hanging on the wall...
Seven green bottles hanging on the wall...
...

One green bottle hanging on the wall,
One green bottle hanging on the wall,
If that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.
Task
Write some amazing code to reproduce the above lyrics starting from n green bottles!

parameter n is 1 to 10
newline terminates every line (including the last)
don't forget the blank lines between the verses */

const word = n => ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][n];

const nBottles = n => word(n) + ` green bottle${n === 1 ? '' : 's'}`;

const titleCase = word => word[0].toUpperCase() + word.slice(1);

const range = n => [...Array(n).keys()].map(x => x + 1).reverse();

const refrain = n => {
  const bottles = nBottles(n);
  return [
    `${titleCase(bottles)} hanging on the wall,\n`,
    `${titleCase(bottles)} hanging on the wall,\n`,
    `${n === 1 ? 'If that' : 'And if'} one green bottle should accidentally fall,\n`,
    `There'll be ${nBottles(n - 1)} hanging on the wall.\n`,
  ].join('');
}

const tenGreenBottles = n => range(n).map(refrain).join('\n');

function tenGreenBottles(n) {
  if (n==1) return "One green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere\'ll be no green bottles hanging on the wall.\n";
  if (n==2) return "Two green bottles hanging on the wall,\nTwo green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be one green bottle hanging on the wall.\n\nOne green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere\'ll be no green bottles hanging on the wall.\n"
  if (n==3) return "Three green bottles hanging on the wall,\nThree green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be two green bottles hanging on the wall.\n\nTwo green bottles hanging on the wall,\nTwo green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be one green bottle hanging on the wall.\n\nOne green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere\'ll be no green bottles hanging on the wall.\n";
  if (n==4) return "Four green bottles hanging on the wall,\nFour green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be three green bottles hanging on the wall.\n\nThree green bottles hanging on the wall,\nThree green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be two green bottles hanging on the wall.\n\nTwo green bottles hanging on the wall,\nTwo green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be one green bottle hanging on the wall.\n\nOne green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere\'ll be no green bottles hanging on the wall.\n";
  if (n==5) return "Five green bottles hanging on the wall,\nFive green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be four green bottles hanging on the wall.\n\nFour green bottles hanging on the wall,\nFour green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be three green bottles hanging on the wall.\n\nThree green bottles hanging on the wall,\nThree green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be two green bottles hanging on the wall.\n\nTwo green bottles hanging on the wall,\nTwo green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be one green bottle hanging on the wall.\n\nOne green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere\'ll be no green bottles hanging on the wall.\n";
  if (n==6) return "Six green bottles hanging on the wall,\nSix green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be five green bottles hanging on the wall.\n\nFive green bottles hanging on the wall,\nFive green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be four green bottles hanging on the wall.\n\nFour green bottles hanging on the wall,\nFour green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be three green bottles hanging on the wall.\n\nThree green bottles hanging on the wall,\nThree green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be two green bottles hanging on the wall.\n\nTwo green bottles hanging on the wall,\nTwo green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be one green bottle hanging on the wall.\n\nOne green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere\'ll be no green bottles hanging on the wall.\n";
  if (n==7) return "Seven green bottles hanging on the wall,\nSeven green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be six green bottles hanging on the wall.\n\nSix green bottles hanging on the wall,\nSix green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be five green bottles hanging on the wall.\n\nFive green bottles hanging on the wall,\nFive green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be four green bottles hanging on the wall.\n\nFour green bottles hanging on the wall,\nFour green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be three green bottles hanging on the wall.\n\nThree green bottles hanging on the wall,\nThree green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be two green bottles hanging on the wall.\n\nTwo green bottles hanging on the wall,\nTwo green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be one green bottle hanging on the wall.\n\nOne green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere\'ll be no green bottles hanging on the wall.\n";
  if (n==8) return "Eight green bottles hanging on the wall,\nEight green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be seven green bottles hanging on the wall.\n\nSeven green bottles hanging on the wall,\nSeven green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be six green bottles hanging on the wall.\n\nSix green bottles hanging on the wall,\nSix green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be five green bottles hanging on the wall.\n\nFive green bottles hanging on the wall,\nFive green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be four green bottles hanging on the wall.\n\nFour green bottles hanging on the wall,\nFour green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be three green bottles hanging on the wall.\n\nThree green bottles hanging on the wall,\nThree green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be two green bottles hanging on the wall.\n\nTwo green bottles hanging on the wall,\nTwo green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be one green bottle hanging on the wall.\n\nOne green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere\'ll be no green bottles hanging on the wall.\n";
  if (n==9) return "Nine green bottles hanging on the wall,\nNine green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be eight green bottles hanging on the wall.\n\nEight green bottles hanging on the wall,\nEight green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be seven green bottles hanging on the wall.\n\nSeven green bottles hanging on the wall,\nSeven green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be six green bottles hanging on the wall.\n\nSix green bottles hanging on the wall,\nSix green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be five green bottles hanging on the wall.\n\nFive green bottles hanging on the wall,\nFive green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be four green bottles hanging on the wall.\n\nFour green bottles hanging on the wall,\nFour green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be three green bottles hanging on the wall.\n\nThree green bottles hanging on the wall,\nThree green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be two green bottles hanging on the wall.\n\nTwo green bottles hanging on the wall,\nTwo green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be one green bottle hanging on the wall.\n\nOne green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere\'ll be no green bottles hanging on the wall.\n";
  if (n==10) return "Ten green bottles hanging on the wall,\nTen green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be nine green bottles hanging on the wall.\n\nNine green bottles hanging on the wall,\nNine green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be eight green bottles hanging on the wall.\n\nEight green bottles hanging on the wall,\nEight green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be seven green bottles hanging on the wall.\n\nSeven green bottles hanging on the wall,\nSeven green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be six green bottles hanging on the wall.\n\nSix green bottles hanging on the wall,\nSix green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be five green bottles hanging on the wall.\n\nFive green bottles hanging on the wall,\nFive green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be four green bottles hanging on the wall.\n\nFour green bottles hanging on the wall,\nFour green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be three green bottles hanging on the wall.\n\nThree green bottles hanging on the wall,\nThree green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be two green bottles hanging on the wall.\n\nTwo green bottles hanging on the wall,\nTwo green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be one green bottle hanging on the wall.\n\nOne green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere\'ll be no green bottles hanging on the wall.\n";
} 

/* Friends
Friends
Andrzej was given a task:

There are n jars with pills. In every jar there is a different type of pill and the amount of pills in each jar is infinite. One type of pill makes a person glow about 30 minutes after taking and none of the other types has any effect.

His job is to determine, in which jar are the pills that make a person glow. But there is one catch, he only has 35 minutes to do so.(so he can't take a pill, wait for the results and then take another one, because he wouldn't be able to see the results) Fortunetely, he can take any number of friends he needs with him. On completing the task Andrzej receives one million dollars. You know that Andrzej is very honest, so he will split the money equally with his friends.

Your job is to determine how many friends does Andrzej need to complete the task.(He also wants to make the highest amount of money.)

For example for n = 2

The answer is 0 because he doesn't need any friends, he just needs to take a pill from the first jar and wait for the effects.

For another example for n = 4

The answer is 1 because having pills A B C D Andrzej can take pills A B and the friend can take pills B C

Note: Andrzej is not able to accurately measure time during the task. */

function friends(n){

  if (n>2) {
    return Math.ceil(Math.log(n)/Math.log(2))-1; 
  }
  else {
    return 0;
  }
}

function friends(n){
  return n<=2 ? 0 : Math.floor(Math.log2(n-1));
  }

/* Grown of a population

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02. */

function nbYear(p0, percent, aug, p) {
  for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}

function nbYear(p0, percent, aug, p) {
    var count = 0;   
    while(p0<p){
        p0 += p0 * percent/100 + aug;
        count++;
    }
    return count;
}

/* Reverse Words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

/* Breaking chocolate problem

Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer. */

var breakChocolate = function(n, m) {
 if(n === 0 || m === 0) return 0
 return n*m - 1;
};

var breakChocolate = function(n, m) {
 return (n*m === 0) ? 0 : n * m - 1;
};

/* Sum of the first nth term of series

Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
NOTE: In PHP the function is called series_sum(). */

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}

/* Find the divisors!

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime" */

function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

function divisors(integer) {
  var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
      divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};

/* Money, Money, Money

Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'

Note that the principal is not taxed but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial pricipal to ammount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumptions : Assume that Desired Principal 'D' is always greater than the initial principal, however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.*/

function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

function calculateYears(principal, interest, tax, desired) {
  return Math.ceil(
    Math.log(desired / principal) / 
    Math.log(1 + interest * (1 - tax))
  );
}

/* Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8 */

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

function rowSumOddNumbers(n) {
  return n*n*n
}

/* Remove the minimum

The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1] */

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

/* Ones and Zeros

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4. */

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}

/* Two to One

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

/* Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

function sumTwoSmallestNumbers(numbers) {  
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}

/* Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

/* Descending Order

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.*/

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

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

/* Find the smallest integer in the array: Given an array of integers your solution should find the smallest integer.

For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for (let i = 0; i < args.length; i++) {
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }
    return smallest;
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

/* The highest profit wins!: Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar. */

function minMax(arr){
  const finalArr = []
  finalArr.push(Math.min(...arr))
  finalArr.push(Math.max(...arr))
  return finalArr
}

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

/* Highest and lowest: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

function highAndLow(numbers){
  const strArr = numbers.split(' ')
  const numArr = strArr.map( x => +x)
  return (Math.max(...numArr) + ' ' + Math.min(...numArr))
}

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

/* Inspiring Strings: When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold */

function longestWord(stringOfWords){
  const arr = stringOfWords.split(' ')
  let highest = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= highest.length) {
      highest = arr[i]
    }
  }
  return highest
}

function longestWord(str){
  return str.split(' ').sort((b, a) => b.length - a.length).pop();
}

/* Don't Give Me Five!: Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata! */

function dontGiveMeFive(start, end) {
  let counter = 0;
  for (let i = start; i <= end; i++) {
    if(i.toString().indexOf("5") === -1) {
      counter++;
    }
  }
  return counter;
}

function dontGiveMeFive(start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++
    }
  }
  return count
}

/* Sum of Angles: Find the total sum of angles in an n sided shape. N will be greater than 2. */

function angle(n) {
  return 180*(n-2);
}

/* Simple String Reversal II: In this Kata, you will be given a string and two indexes. Your task is to reverse the portion of that string between those two indexes inclusive.

solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.
Input will be lowercase and uppercase letters only.

More examples in the test cases!

Good luck! */

function solve(st,a,b){
  return st.slice(0,a) + st.slice(a,b+1).split("").reverse().join("")+ st.slice(b+1,st.length);
}

function solve(st,a,b){
  var slice1 = st.slice(0, a);
  var sliceRev = st.slice(a,b + 1).split('').reverse('').join('');
  var slice2 = st.slice(b + 1);
  var join = (slice1 + sliceRev + slice2).split('');
  return join.join('');
}

/* Love vs Friendship: If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.*/

function wordsToMarks(string){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let finalCount = null
  for (let i = 0; i < string.length; i++) {
    let num = alpha.indexOf(string[i]) + 1
    finalCount += num
  }
  return finalCount;
}

/* Area of a Circle: Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

Example:

circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false */

var circleArea = function(radius) {
  if (radius <= 0 || typeof radius !== "number") {
    return false
  } else {
    return +(Math.pow(radius, 2) * Math.PI).toFixed(2)
  }
};

var circleArea = function(radius) {
  return radius > 0 ? +(radius*radius*Math.PI).toFixed(2) : false;
};

/* Odd or Even?: Given an array of numbers, determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

Example:

oddOrEven([0]) returns "even"
oddOrEven([2, 5, 34, 6]) returns "odd"
oddOrEven([0, -1, -5]) returns "even" */

function oddOrEven(array) {
  let sum = 0
  for (i = 0; i < array.length; i++) {
    sum += array[i]
  }
  if (sum === 0) {
    return "even"
  } else if (sum % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

/* Check Three and Two: Given an array with 5 string values 'a', 'b' or 'c'. Check if the array contains three and two of the same values.

For example:

['a', 'a', 'a', 'b', 'b'] => true  // 3 x 'a' and 2 x 'b'
['a', 'b', 'c', 'b', 'c'] => false // 1 x 'a', 2 x 'b' and 2 x 'c'
['a', 'a', 'a', 'a', 'a'] => false // 5 x 'a' */

function checkThreeAndTwo(array) {
  const countArr = []
  const aCount = array.filter(function(x) { return x === 'a'; }).length;
  const bCount = array.filter(function(x) { return x === 'b'; }).length;
  const cCount = array.filter(function(x) { return x === 'c'; }).length;
  countArr.push(aCount, bCount, cCount)
  if (countArr.indexOf(3) !== -1 && countArr.indexOf(2) !== -1) {
    return true;
  } else {
    return false;
  }
}

/* Recycle! :You are having a BBQ, after the BBQ you are left with the rubbish. You have 3 recycling boxes:

Red: Plastics, Green: Glass, Blue: Card.

You will need to sort the rubbish according to the material and return the number of items in each box in the form of an array i.e [2,3,4] where 2 is the number of plastic items, 3 is the number of glass items and 4 is the number of card items. assume:

Plastics > 0, Glass < 0, Card = 0 */

function recycleMe(recycle){
  let plastics = 0
  let glass = 0
  let cards = 0
  const finalCount = []
  for (let i = 0; i < recycle.length; i++) {
    if (recycle[i] > 0) {
      plastics++
    } else if (recycle[i] < 0) {
      glass++
    } else {
      cards++
    }
  }
  finalCount.push(plastics, glass, cards)
  return finalCount
}

const recycleMe = r => {
  let glass = r.filter(x=>x<0).length
  let plastic = r.filter(x=>x>0).length
  let card = r.filter(x=>x==0).length
  return [plastic,glass,card]
}

/* FizzBuzz: Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value 'Fizz' instead
If the value is a multiple of 5: use the value 'Buzz' instead
If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
C# method calling example:

string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ] */

function fizzbuzz(n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

function fizzbuzz(n) {
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;

// 8 kyu problems //

/* Keep up the hoop

Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

-If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

-If he doesn't get 10 hoops, return the string "Keep at it until you get it". */

function hoopCount (n) {
  return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

/* The 'if' function

Who likes keywords? Nobody likes keywords, so why use them?

You know what keyword I use too much? if! We should make a function called _if, with its arguments as a logical test and two functions/lambdas where the first function is executed if the boolean is true, and the second if it's false, like an if/else statement, so that we don't have to mess around with those nasty keywords! Even so, It should support truthy/falsy types just like the keyword.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console. */

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

/* The Wide-Mouthed Frog

The wide mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide. */

function mouthSize(animal) {
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
}

/* Well of Ideas

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. */

function well(x) {
  var good = 0
  
  for (var i = 0; i < x.length; ++i)
    if (x[i] == 'good' && ++good > 2)
      return 'I smell a series!'
  
  return good ? 'Publish!' : 'Fail!'
}

/* Alan Partridge II - Apple Turnover

As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

Lynn: Alan, there’s that teacher chap.
Alan: Michael, if he hits me, will you hit him first?
Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
Alan: Yeah, chicken stock.
Phil: Hello Alan.
Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
Lynn: What do you mean?
Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

X will be either a number or a string. Both are valid. */

function apple(x){
  
  if (Math.pow(x,2) > 1000) {
    return "It's hotter than the sun!!";
  } else {
    return "Help yourself to a honeycomb Yorkie for the glovebox.";
  
  }

}

/* Generate range of integers

Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step) */

function generateRange(min, max, step){
  let arr = [];
  for (let i=min; i<=max; i += step) {
    arr.push(i);
  }
  return arr;
}

/* L1: Set alarm

Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false setAlarm(false, true) -> false setAlarm(false, false) -> false setAlarm(true, false) -> true

setalarm(true, true) -> false
setalarm(false, true) -> false
setalarm(false, false) -> false
setalarm(true, false) -> true */

function setAlarm(employed, vacation){
  return employed && !vacation;
}

const setAlarm = (employed, vacation) => employed && !vacation;

/* 5 without numbers !!

Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :) */

function unusualFive() {
  return 'Young'.length
}

/* Draw stairs
given a number n, draw stairs with 'I' n tall and n wide, with the tallest in the top left. Example (with - to represent spaces; DO NOT USE THEM IN THE SOLUTIONS! USE SPACES IN SOLUTION! the "-"s are for clarity.): draw_stairs(3) == '''I\n_I\n__I'''

For example, a 7-step stairs should be drawn like this:

const sevenStepStairs = drawStairs(7);
I
 I
  I
   I
    I
     I
      I */

function drawStairs(n) {

let step = "I"
for(let i=1; i<n;  i++) {
 step +="\n" + " ".repeat(i) + 'I' ;
}return step 
}

/* Sort and Star

You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. */

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

/* Multiple of index

Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68] */

function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}

let multipleOfIndex = a => a.filter((n, i) => n % i === 0);

/* A Strange Trip to the Market

You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."

It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. The Loch Ness Monster almost tricked you!

There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty. */

function isLockNessMonster(s) {
  return s.includes("tree fiddy") || s.includes("3.50");
}

/* Swap Values

I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here? */

function swapValues() {
  return arguments[0].reverse();
}

function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

/* Find the Integral

Create a function that finds the integral of the expression passed.

In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

Notes:

The output should be a string.
The coefficient and exponent is always a positive integer.
Examples
 3, 2  -->  "1x^3"
12, 5  -->  "2x^6"
20, 1  -->  "10x^2"
40, 3  -->  "10x^4"
90, 2  -->  "30x^3" */

const integrate = (coefficient, exponent) => {
  return coefficient / (exponent + 1) + 'x^' + (exponent + 1);
}

/* A Wolf in Sheep's Clothing

A wolf in sheep's clothing
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep" */

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

/* Twice as Old 

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). */

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

function twiceAsOld(a, b) {
  return a>2*b ? a-2*b : 2*b-a;
}

/* Is the string uppercase?

Is the string uppercase?
Task
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS. */

String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}

if (!String.prototype.isUpperCase) {
  String.prototype.isUpperCase = function () {
    return this.toUpperCase() === String(this);
  };
}

String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};

/* Sum of differences in array

Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([1, 2, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell). */

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

/* Third Angle of a Triangle

You are given two angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested. */

function otherAngle(a, b) {
  return 180-(a+b);
}

const otherAngle = (a, b) => 180 - a - b

/* Lost Without a Map

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know. */

function maps(x){
  return x.map(n => n * 2);
}

/* Is n divisible by x and y?

Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Example:
isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
isDivisible(100,5,3)--> false because 100 is not divisible by 3
isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5 */

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

/* Sum without highest and lowest number

Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges. */

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

/* Century from Year

The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
Hope you enjoy it .. Awaiting for Best Practice Codes */

function century(year) {
  return (year + 99) / 100 | 0;
}

function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}

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

/* Sentence Smash: Sentence Smash
Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
var words = ['hello', 'world', 'this', 'is', 'great'];
smash(words); // returns "hello world this is great"
Assumptions
You can assume that you are only given words.
You cannot assume the size of the array.
You can assume that you will always get an array.
What We're Testing
We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

Disclaimer
This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line. */

function smash (words) {
  return words.join(' ');
};

/* Invert values: Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. */

function invert(array) {
  const finalArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      finalArr.push(array[i])
    } else {
      finalArr.push(-array[i])
    }
  }
  return finalArr
}

function invert(array) {
  return array.map( x => x === 0 ? x : -x);
}

/* Keep Hydrated! : Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5 */

function litres(time) {
  return Math.floor(time/2);
}

/* Calculate BMI: Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

function bmi(weight, height) {
  const calculated = (weight / Math.pow(height, 2))
  if (calculated <= 18.5) {
    return "Underweight"
  } else if (calculated <=25) {
    return "Normal"
  } else if (calculated <= 30) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

/* Reversed Strings: Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow' */

function solution(str){
  return str.split('').reverse().join('');
}

/* Dollars and Cents: The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you! */

function formatMoney(amount){
  return '$' + amount.toFixed(2);
}

/* Pre FizzBuzz Workout #1: This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected outputs: an array of positive integers from 1 to n

Your job is to write an algorithm that gets you from the input to the output. */

function preFizz(n) {
  const arr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

/* Count of Positives / Sum of Negatives: Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:

C#/Java: new int[] {} / new int[0];
C++: std::vector<int>();
JavaScript/CoffeeScript/PHP/Haskell: [];
Rust: Vec::<i32>::new();
ATTENTION!
The passed array should NOT be changed. Read more here.

For example:

input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
return [10, -65]. */

function countPositivesSumNegatives(input) {
  if (input === null || input === []) {
    return [];
  } else {
    let posSum = 0;
    let negSum = 0;
    for (i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        posSum += 1
      } else if (input[i] < 0) {
        negSum += input[i]
      }
    }
    return [posSum, negSum];
  }
}

/* Remove anchor from URL: Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples:

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1'
removeUrlAnchor('www.codewars.com?page=1') */

function removeUrlAnchor(url){
  const anchorIdx = url.indexOf('#')
  if (anchorIdx !== -1) {
    return url.slice(0, anchorIdx)
  } else {
    return url
  }
}

function removeUrlAnchor(url){
  return url.replace(/#.*/gi,"");
}

function removeUrlAnchor(url){
  return url.split('#')[0];
}

/* Surface Area and Volume of a Box: Write a function that returns the total surface area and volume of a box as an array: [area, volume]. */

function getSize(width, height, depth) {
  return [2*width*height + 2*width*depth + 2*height*depth, width * height * depth]
};

const getSize = (w, h, d) => [
  (w * h + w * d + h * d) * 2,
  w * h * d
];
