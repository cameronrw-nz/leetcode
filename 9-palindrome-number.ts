function isPalindrome(x: number): boolean {
    const numString = x.toString();
    if (numString.startsWith("-")) {
        return false;
    }

    let isPalindrome: boolean | undefined = undefined;
    let index = 0;
    while (isPalindrome !== false && index <= (numString.length/2-1)) {
        isPalindrome = numString[index]=== numString[numString.length-1-index];
        index++
    }

    return isPalindrome || (numString.length === 1 ? true : false)
};

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
console.log("Example 1:", isPalindrome(121));

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
console.log("Example 2:", isPalindrome(-121));

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
console.log("Example 3:", isPalindrome(10));

console.log("Example 4:", isPalindrome(9564659));
console.log("Example 5:", isPalindrome(1000010));
console.log("Example 6:", isPalindrome(1));
console.log("Example 7:", isPalindrome(1221));
console.log("Example 8:", isPalindrome(1231));
