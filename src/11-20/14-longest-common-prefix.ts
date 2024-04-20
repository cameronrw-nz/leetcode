function longestCommonPrefix(strs: string[]): string {
    let result = "";
    while (true) {
        const char = strs[0][result.length] || "";
        const areSame = strs.every(str => str.length > result.length && str[result.length] === char);

        if (!areSame) {
            break;
        }
        else {
            result += char;
        }
    }

    return result;
};

export const LongestCommonPrefix = longestCommonPrefix