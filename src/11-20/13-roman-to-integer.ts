function romanToInt(s: string): number {
    const integerToNumerals = new Map([
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ]);

    let output = 0;

    while (s.length > 0) {
        let hasChanged = false;
        integerToNumerals.forEach((integer: number, romanNumeral: string) => {
            const index = s.indexOf(romanNumeral);
            if (!hasChanged && index === 0) {
                hasChanged = true;

                s = s.slice(romanNumeral.length, s.length);
                output += integer;
            }
        });
    }

    return output;
};

export const RomanToInt = romanToInt;