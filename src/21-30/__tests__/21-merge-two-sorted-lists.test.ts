import mergeTwoLists, { ListNode } from "../21-merge-two-sorted-lists";

describe("mergeTwoLists", () => {
    const toLinkedList = (arr: number[]): ListNode | null => {
        if (arr.length === 0) return null;
        const head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    };

    const toArray = (node: ListNode | null): number[] => {
        const arr: number[] = [];
        let current = node;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    };

    test("Example 1", () => {
        const list1 = toLinkedList([1, 2, 4]);
        const list2 = toLinkedList([1, 3, 4]);
        const result = mergeTwoLists(list1, list2);
        expect(toArray(result)).toEqual([1, 1, 2, 3, 4, 4]);
    });

    test("Example 2", () => {
        const list1 = toLinkedList([]);
        const list2 = toLinkedList([]);
        const result = mergeTwoLists(list1, list2);
        expect(toArray(result)).toEqual([]);
    });

    test("Example 3", () => {
        const list1 = toLinkedList([]);
        const list2 = toLinkedList([0]);
        const result = mergeTwoLists(list1, list2);
        expect(toArray(result)).toEqual([0]);
    });

    test("Both lists have multiple nodes with the same value", () => {
        const list1 = toLinkedList([1, 2, 2, 3]);
        const list2 = toLinkedList([2, 2, 4, 4]);
        const result = mergeTwoLists(list1, list2);
        expect(toArray(result)).toEqual([1, 2, 2, 2, 2, 3, 4, 4]);
    });

    test("One list is much longer than the other", () => {
        const list1 = toLinkedList([1, 2, 3]);
        const list2 = toLinkedList([4, 5, 6, 7, 8, 9, 10]);
        const result = mergeTwoLists(list1, list2);
        expect(toArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test("Lists have negative values", () => {
        const list1 = toLinkedList([-10, -5, 0, 5, 10]);
        const list2 = toLinkedList([-20, -15, -10, -5, 0]);
        const result = mergeTwoLists(list1, list2);
        expect(toArray(result)).toEqual([-20, -15, -10, -10, -5, -5, 0, 0, 5, 10]);
    });

    test("Lists have maximum and minimum values", () => {
        const list1 = toLinkedList([-100, 0, 100]);
        const list2 = toLinkedList([-100, 0, 100]);
        const result = mergeTwoLists(list1, list2);
        expect(toArray(result)).toEqual([-100, -100, 0, 0, 100, 100]);
    });

    test("Lists have maximum number of nodes", () => {
        const list1 = toLinkedList(Array(50).fill(1));
        const list2 = toLinkedList(Array(50).fill(2));
        const result = mergeTwoLists(list1, list2);
        expect(toArray(result)).toEqual([...Array(50).fill(1), ...Array(50).fill(2)]);
    });


});