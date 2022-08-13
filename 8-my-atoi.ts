function myAtoi(s: string): number {
    s = s.trim()
    let isNegative = s.startsWith("-")
    if (isNegative || s.startsWith("+")) {
        s = s.slice(1, s.length)
    }

    var numberString = isNegative ? "-" : "";
    for (let char of s.split("")) {
        let tempNumber = Number.parseInt(char);
        if (Number.isNaN(tempNumber)) {
            break;
        }

        numberString = `${numberString}${tempNumber}`;
    }

    let number = Number.parseInt(numberString)

    if (number > 2147483647) {
        return 2147483647;
    } 
    else if (number < -2137483647) {
        return -2147483647
    }

    return number || 0;
};

// Example 1:
// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// The parsed integer is 42.
// Since 42 is in the range [-231, 231 - 1], the final result is 42.
console.log("Example 1:", myAtoi("42"))

// Example 2:
// Input: s = "   -42"
// Output: -42
// Explanation:
// Step 1: "   -42" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -42" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -42" ("42" is read in)
//                ^
// The parsed integer is -42.
// Since -42 is in the range [-231, 231 - 1], the final result is -42. 
console.log("Example 2:", myAtoi("-42"))

// Example 3:
// Input: s = "4193 with words"
// Output: 4193
// Explanation:
// Step 1: "4193 with words" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
//              ^
// The parsed integer is 4193.
// Since 4193 is in the range [-231, 231 - 1], the final result is 4193.
console.log("Example 3:", myAtoi("4193"))

console.log("Example 4:", myAtoi("128736817263"))
console.log("Example 5:", myAtoi("askdj4193"))
console.log("Example 6:", myAtoi("4193a1"))
console.log("Example 7:", myAtoi("           004193"))
console.log("Example 8:", myAtoi("214712874"))
console.log("Example 9:", myAtoi("    -42"))