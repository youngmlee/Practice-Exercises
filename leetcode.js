// Format = question, my solution, leetcode solution //

// Easy Difficulty //

/* Power of Four

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false */

var isPowerOfFour = function(num) {
  return /^10*$/.test(num.toString(4));
};

/* Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle. */

var maxSubArray = function(arr) {
    let maxLocal = (maxGlobal = arr[0]);

	  for (let i = 1; i < arr.length; i += 1) {
		maxLocal = Math.max(arr[i], maxLocal + arr[i]);

		if (maxLocal > maxGlobal) {
		  maxGlobal = maxLocal;
		}
	  }
	  return maxGlobal;
	};

/* Same Tree

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false */

class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        Queue<TreeNode> queue = new LinkedList<>();
        if (p == null && q == null)
            return true;
        else if (p == null || q == null)
            return false;
        if (p != null && q != null) {
            queue.offer(p);
            queue.offer(q);
        }
        while (!queue.isEmpty()) {
            TreeNode first = queue.poll();
            TreeNode second = queue.poll();
            if (first == null && second == null)
                continue;
            if (first == null || second == null)
                return false;
            if (first.val != second.val)
                return false;
            queue.offer(first.left);
            queue.offer(second.left);
            queue.offer(first.right);
            queue.offer(second.right);
        }
        return true;
    }
}

/* Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true */

var isValid = function(s) {
    if (s === null || s.length <= 0) return true;
    var cArr = s.split('');
    var stack = [];
    for (var c of cArr) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    if (stack.length === 0) return true;
    return false;
};

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

/* Find the Difference: Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added. */

var findTheDifference = function(s, t) {
    const sArr = s.split('')
    const tArr = t.split('')
    const sSorted = sArr.sort()
    const tSorted = tArr.sort()
    for (let i = 0; i < tSorted.length; i++) {
        if (sSorted[i] !== tSorted[i]) {
            return tSorted[i]
        }
    }
};

/* Count and Say

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

 

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211" */

var countAndSay = function(n) {
    if (n == 1) return '1'
    let prev = countAndSay(n - 1).split('');
	
    let result = '';
    let lastIdx = -1;
    for (let i = 0; i < prev.length; i++){
        if (prev[i] !== prev[i+1]) {
            result += (i - lastIdx) + prev[i];
            lastIdx = i;
        }
    }
    return result;
};

/* Reverse Integer: Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows. */

var reverse = function(x) {
  const xStr = x.toString()
  let arr = xStr.split('')
  let negative = undefined
  let filtered = []
  if (arr[0] === '-') {
    arr = arr.slice(1)
    negative = true
  }
  const reversedArr = arr.reverse()
  for (let i = 0; i < reversedArr.length; i++) {
    if (+reversedArr[i] > 0) {
      filtered = reversedArr.slice(0, i+1)
    }
  }

  if (negative && (-(+filtered.join('')) < -2147483647)) {
    return 0
  }
  else if (negative) {
    return -(+filtered.join(''))
  }
  else if (+filtered.join('') > 2147483647) {
    return 0
  }
  else {
    return +filtered.join('')
  }
};

/* Sum of Two Integers: Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3. */

var getSum = function(a, b) {
  if (b == 0) {
    return a;
  } else {
    return getSum(a ^ b, (a & b) << 1)
  }
};

/* Swap Salary: Given a table salary, such as the one below, that has m=male and f=female values. Swap all f and m values (i.e., change all f values to m and vice versa) with a single update query and no intermediate temp table.

For example:
| id | name | sex | salary |
|----|------|-----|--------|
| 1  | A    | m   | 2500   |
| 2  | B    | f   | 1500   |
| 3  | C    | m   | 5500   |
| 4  | D    | f   | 500    |
After running your query, the above salary table should have the following rows:
| id | name | sex | salary |
|----|------|-----|--------|
| 1  | A    | f   | 2500   |
| 2  | B    | m   | 1500   |
| 3  | C    | f   | 5500   |
| 4  | D    | m   | 500    | */

UPDATE salary
    SET sex = if(sex = 'f', 'm', if(sex = 'm', 'f',null));

// Medium Difficulty //

/* Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807. */

var addTwoNumbers = function(l1, l2) {
    let node = null
    const carry = arguments[2]
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        const val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val % 10)
        node.next = addTwoNumbers(next1, next2, val >= 10)  
    } else if (carry) {
        node = new ListNode(1)
        node.next = null
    }
    return node
};

// Hard Difficulty //
