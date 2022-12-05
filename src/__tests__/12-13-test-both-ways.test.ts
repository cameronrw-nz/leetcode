import { IntToRoman } from "../12-integer-to-roman";
import { RomanToInt } from "../13-roman-to-integer";

describe("12 - 13 Test both ways", () => {
    test("Example 3:", () => {
        for (let i = 1; i <= 3999; i++) {
            const romanNumeral = IntToRoman(i);

            const resultInt = RomanToInt(romanNumeral);
    
            expect(resultInt).toBe(i)
        }
    })
})
