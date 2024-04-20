function letterCombinations(digits: string): string[] {
    const numberToLetters = new Map<string, string[]>()
    numberToLetters.set("2", ["a", "b", "c"])
    numberToLetters.set("3", ["d", "e", "f"])
    numberToLetters.set("4", ["g", "h", "i"])
    numberToLetters.set("5", ["j", "k", "l"])
    numberToLetters.set("6", ["m", "n", "o"])
    numberToLetters.set("7", ["p", "q", "r", "s"])
    numberToLetters.set("8", ["t", "u", "v"])
    numberToLetters.set("9", ["w", "x", "y", "z"])

    let letters: string[] = [];

    digits.split("").forEach(digit => {

        if (letters.length == 0) {
            letters = numberToLetters.get(digit) ?? [];
        }
        else {
            const temp = [...letters];
            const currentLetters = numberToLetters.get(digit)
            letters = [];
            currentLetters?.forEach(letter => {
                temp.forEach(tempLetters => {
                    letters.push(tempLetters + letter)
                })
            })
        }
    })

    return letters.sort();
};

export const LetterCombinations = letterCombinations
