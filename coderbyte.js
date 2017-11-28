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

// Medium Difficulty //

// Hard Difficulty //
