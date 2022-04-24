/**
 * @param {number} x
 * @return {boolean}
 * 
 * @description {Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.} 
 */

// program to check if the string is palindrome or not

function palindromeNumber (string) {
    // convert string to an array
    const arrayValues = string.split('');
    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();
    // convert array to string
    const reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
console.log(palindromeNumber('101'));
console.log(palindromeNumber('amma'));
console.log(palindromeNumber('tark'));

module.exports = palindromeNumber;