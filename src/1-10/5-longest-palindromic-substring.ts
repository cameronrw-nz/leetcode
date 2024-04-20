function longestPalindrome(s: string): string {
    let longestPalindrome = ""
    let palindrome = s[0];
    for (let i = 0; i < s.length; i++) {
        palindrome = s[i];

        let k = i;
        while (s[k + 1] == s[i]) {
            palindrome += s[k + 1];
            k++;
        }

        i = k;

        let lowerIndex = i - palindrome.length, upperIndex = i + 1;
        while (lowerIndex >= 0 && upperIndex < s.length && s[lowerIndex] === s[upperIndex]) {
            palindrome = s[lowerIndex] + palindrome + s[upperIndex]
            lowerIndex--, upperIndex++;
        }

        if (palindrome.length > longestPalindrome.length) {
            longestPalindrome = palindrome
        }
    }

    return longestPalindrome;
};

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
console.log("Example 1: ", longestPalindrome("babad"))

// Example 2:
// Input: s = "cbbd"
// Output: "bb"
console.log("Example 2: ", longestPalindrome("cbbd"))

console.log("Example 3: ", longestPalindrome("ccc"))
console.log("Example 4: ", longestPalindrome("tacocat"))
console.log("Example 5: ", longestPalindrome("1xbabybabx2tacocat3"))
console.log("Example 6: ", longestPalindrome("bcccccb"))
console.log("Example 7: ", longestPalindrome("bccccb"))