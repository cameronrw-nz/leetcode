/** Generated using github copilot to test how it works */
function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    function backtrack(s: string, left: number, right: number) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }

        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }

        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
}

export default generateParenthesis;