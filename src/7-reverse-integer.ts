function reverse(x: number): number {
    const s = x.toFixed();
    const isNegative = s.startsWith("-")
    if (isNegative) {
        s = s.slice("-");
    }

    while (s.endsWith("0")) {
        s = s.splice(s.length-2, 1);
    }

    s = (isNegative ? "-" : "")+ s.split("").reverse().join("")

    return Number.parseInt(s);
};

// Example 1:
// Input: x = 123
// Output: 321
console.log("Example 1:", reverse(123))

// Example 2:
// Input: x = -123
// Output: -321
console.log("Example 2:", reverse(-123))

// Example 3:
// Input: x = 120
// Output: 21
console.log("Example 3:", reverse(120))