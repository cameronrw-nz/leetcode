class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    toString = (): string => {
        return this.val + (this.next ? ", " + this.next.toString() : "")
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let isCarryOver = false;
    let numNode1 = l1, numNode2 = l2;

    let answer = null;
    let currentPointer: ListNode | null = null;
    while (numNode1?.val != null || numNode2?.val != null || isCarryOver) {
        const solution: number = (numNode1?.val ?? 0) + (numNode2?.val ?? 0) + (isCarryOver ? 1 : 0);
        isCarryOver = solution >= 10;

        if (currentPointer == null) {
            currentPointer = answer = new ListNode(solution % 10);
        }
        else {
            currentPointer.next = new ListNode(solution % 10);
            currentPointer = currentPointer.next
        }

        numNode1 = numNode1?.next ?? null, numNode2 = numNode2?.next ?? null;
    }

    return answer;
};


// Example 1
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
console.log("Example 1: ", addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))))?.toString())
// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]
console.log("Example 2: ", addTwoNumbers(new ListNode(0), new ListNode(0))?.toString())

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
console.log("Example 3: ", addTwoNumbers(new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))), new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))?.toString())