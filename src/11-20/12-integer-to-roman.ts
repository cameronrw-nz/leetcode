function intToRoman(num: number): string {
    const integerToNumerals = new Map([
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ]);

    let output = "";

    while (num > 0) {
        let hasChanged = false;
        integerToNumerals.forEach((romanNumeral: string, key: number) => {
            if (!hasChanged && key <= num) {
                hasChanged = true;

                num -= key;
                output += romanNumeral;
            }
        });
    }

    return output;
};

export const IntToRoman = intToRoman;