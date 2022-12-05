import { RomanToInt } from "../13-roman-to-integer";

describe("13 - Roman to Integer", () => {
    test("Example 1:", () => {
        console.log("Explanation: III = 3.")

        const result = RomanToInt("III");

        expect(result).toBe(3)
    })

    test("Example 2:", () => {
        console.log("Explanation: L = 50, V = 5, III = 3.")

        const result = RomanToInt("LVIII");

        expect(result).toBe(58)
    })

    test("Example 3:", () => {
        console.log("Explanation: L = 50, V = 5, III = 3.")

        const result = RomanToInt("MCMXCIV");

        expect(result).toBe(1994)
    })
})
