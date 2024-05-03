function isValid(s: string): boolean {
    const stack: string[] = [];
    const characters = s.split('');

    for (var i = 0; i < characters.length; i++) {
        const char = characters[i];
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char)
        }
        else {
            let lastChar = stack[stack.length - 1];
            if (!lastChar) {
                return false;
            }

            if ((char === ')' && lastChar !== '(')
                || (char === ']' && lastChar !== '[')
                || (char === '}' && lastChar !== '{')) {
                break;
            }
            else {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
};

export default isValid;