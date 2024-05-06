import generateParenthesis from "../22-generate-parenthesis";

describe("generateParenthesis", () => {
    test("n = 1", () => {
        const result = generateParenthesis(1);
        expect(result).toEqual(["()"]);
    });

    test("n = 2", () => {
        const result = generateParenthesis(2);
        expect(result).toEqual(["(())", "()()"]);
    });


    test("n = 3", () => {
        const result = generateParenthesis(3);
        expect(result).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
    });


    test("n = 4", () => {
        const result = generateParenthesis(4);
        const expected = [
            "(((())))",
            "((()()))",
            "((())())",
            "((()))()",
            "(()(()))",
            "(()()())",
            "(()())()",
            "(())(())",
            "(())()()",
            "()((()))",
            "()(()())",
            "()(())()",
            "()()(())",
            "()()()()"
        ];
        expect(result).toEqual(expected);
    });
});