import isValid from "../20-valid-parenthesis";

describe("isValid", () => {
    test("Example 1", () => {
        const s = "()";
        const result = isValid(s);
        expect(result).toBe(true);
    });

    test("Example 2", () => {
        const s = "()[]{}";
        const result = isValid(s);
        expect(result).toBe(true);
    });

    test("Example 3", () => {
        const s = "(]";
        const result = isValid(s);
        expect(result).toBe(false);
    });

    test("Edge case - Empty string", () => {
        const s = "";
        const result = isValid(s);
        expect(result).toBe(true);
    });

    test("Edge case - Single bracket", () => {
        const s = "(";
        const result = isValid(s);
        expect(result).toBe(false);
    });

    test("Nested brackets", () => {
        const s = "({[]})";
        const result = isValid(s);
        expect(result).toBe(true);
    });

    test("Incorrectly nested brackets", () => {
        const s = "([{]})";
        const result = isValid(s);
        expect(result).toBe(false);
    });

    test("Open brackets not closed", () => {
        const s = "({[";
        const result = isValid(s);
        expect(result).toBe(false);
    });

    test("Close brackets not opened", () => {
        const s = "]})";
        const result = isValid(s);
        expect(result).toBe(false);
    });

    test("Long string with valid brackets", () => {
        const s = "([]){}([]){}([]){}([]){}([]){}([]){}";
        const result = isValid(s);
        expect(result).toBe(true);
    });

    test("Long string with one invalid bracket", () => {
        const s = "([]){}([]){}([]){}([]){}([]){}([]){}[";
        const result = isValid(s);
        expect(result).toBe(false);
    });
});