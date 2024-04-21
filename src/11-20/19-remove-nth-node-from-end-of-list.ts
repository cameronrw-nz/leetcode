export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    toList(): number[] {
        return [this.val].concat(this.next ? this.next.toList() : [])
    }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null || head.next === null) return null;
    let nextNode: ListNode | null = head;

    let length = 0;
    while (nextNode) {
        nextNode = nextNode.next
        length++;
    }

    nextNode = head;

    if (length - n == 0) {
        return head?.next || null
    }

    for (let index = 1; index < length - n; index++) {
        nextNode = nextNode?.next || null;
    }

    if (nextNode) {
        nextNode.next = nextNode.next?.next || null;
    }

    return head;
};

export const RemoveNthFromEnd = removeNthFromEnd