import { IntToRoman } from "../12-integer-to-roman"

describe("12 - Integer to Roman", () => {
    test("Example 1:", () => {
        console.log("Explanation: 3 is represented as 3 ones.")

        const result = IntToRoman(3);

        expect(result).toBe("III")
    })

    test("Example 2:", () => {
        console.log("Explanation: L = 50, V = 5, III = 3.")

        const result = IntToRoman(58);

        expect(result).toBe("LVIII")
    })

    test("Example 3:", () => {
        console.log("Explanation: L = 50, V = 5, III = 3.")

        const result = IntToRoman(1994);

        expect(result).toBe("MCMXCIV")
    })

    test.each([
      [1999, "MCMXCIX"],
      [3999, "MMMCMXCIX"],
      [50, "L"],
      [27, "XXVII"],
    ])("Other Examples, Input: %s, Expected: %s", (input: number, expected: string) => {
        const result = IntToRoman(input);

        expect(result).toBe(expected)
    })
})
