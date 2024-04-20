import { ThreeSumClosest } from "../16-three-sum-closest";
import { LetterCombinations } from "../17-letter-combinations-of-phone-number";

describe("16 - Letter Combinations of a Phone Number", () => {
    test("Example 1", () => {
        const result = LetterCombinations("23");

        expect(result).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    });

    test("Example 2", () => {
        const result = LetterCombinations("");

        expect(result).toEqual([]);
    });

    test("Example 3", () => {
        const result = LetterCombinations("2");

        expect(result).toEqual(["a", "b", "c"]);

    })
});