function convert(s: string, numRows: number): string {
    const maxNumberOfColumns = Math.ceil(s.length / numRows)
    const array: string[][] = []
   
    for (let i = 1; i<=numRows;i++) {
        const row = []
        for (let i = 0; i<= maxNumberOfColumns; i++ ) {
            row.push("")
        }
        array.push(row)
    }

    let colNumber = 0;
    let rowNumber = 0;
    
    s.split("").forEach((char, index) => {

        const isVerticalColumn = colNumber % (numRows-1) === 0; 
        array[rowNumber].splice(colNumber, 1, char)

        if ((isVerticalColumn && rowNumber+1 === numRows) || !isVerticalColumn) {
            colNumber++;
            rowNumber--;
        }
        else if (isVerticalColumn && rowNumber+1 < numRows) {
            rowNumber++;
        }    

        if (rowNumber < 0) {
            rowNumber = 0
        }
    });
    
    return array.map(i=>i.join("")).join("")
};

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
console.log("Example 1: ", convert("PAYPALISHIRING", 3))

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
console.log("Example 2: ", convert("PAYPALISHIRING", 4))

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"
console.log("Example 3: ", convert("A", 1))


console.log("Example 4: ", convert("AB", 1))
console.log("Example 5: ", convert("ABC", 1))

