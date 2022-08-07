function lengthOfLongestSubstring(s: string): number {
    const chars = s.split("");

    let highestLength = 0
    let currentSubString = [];
    for (let i = 0; i < chars.length; i++) {
        currentSubString = [chars[i]];

        for (let j = i + 1; j < chars.length; j++) {
            if (currentSubString.includes(chars[j])) {
                break;
            }

            currentSubString.push(chars[j])
        }

        if (currentSubString.length > highestLength) {
            highestLength = currentSubString.length;
        }
    }

    return highestLength;
};

function lengthOfLongestSubstringImproved(s: string): number {
    let highestLength = 0
    let currentSubString = ""
    for (let char of s) {
        if (currentSubString.includes(char)) {
            currentSubString = currentSubString.slice(currentSubString.indexOf(char) + 1)
        }

        currentSubString += char;

        if (currentSubString.length > highestLength) {
            highestLength = currentSubString.length;
        }
    }

    return highestLength;
};

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
console.log("Example 1: ", lengthOfLongestSubstringImproved("abcabcbb"))

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
console.log("Example 2: ", lengthOfLongestSubstringImproved("bbbbb"))

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
console.log("Example 3: ", lengthOfLongestSubstringImproved("pwwkew"))