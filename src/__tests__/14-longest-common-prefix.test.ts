import { LongestCommonPrefix } from "../14-longest-common-prefix";

describe("14 - Longest Common Prefix", () => {
    test("Example 1:", () => {
        const result = LongestCommonPrefix(["flower","flow","flight"]);
        
        expect(result).toBe("fl")
    })
    
    test("Example 2:", () => {
        // Explanation: There is no common prefix among the input strings.
        const result = LongestCommonPrefix(["dog","racecar","car"]);

        expect(result).toBe("")
    })

    test.each([
        [[""], ""],
        [["dog", "do"], "do"],
      ])("Other Examples, Input: %s, Expected: %s", (input: string[], expected: string) => {
          const result = LongestCommonPrefix(input);
  
          expect(result).toBe(expected)
      })
})
