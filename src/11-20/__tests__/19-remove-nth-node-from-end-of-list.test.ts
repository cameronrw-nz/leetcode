import { ListNode, RemoveNthFromEnd } from "../19-remove-nth-node-from-end-of-list";

describe("19 - Remove Nth Node From End of List", () => {
    test("Example 1", () => {
        // [1,2,3,4,5]
        const linkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        const result = RemoveNthFromEnd(linkedList, 2);

        expect(result?.toList()).toEqual([1, 2, 3, 5]);
    });

    test("Example 2", () => {
        // [1]
        const linkedList = new ListNode(1);
        const result = RemoveNthFromEnd(linkedList, 1);

        expect(result?.toList() || []).toEqual([]);
    });

    test("Example 3", () => {
        // [1,2]
        const linkedList = new ListNode(1, new ListNode(2));
        const result = RemoveNthFromEnd(linkedList, 1);

        expect(result?.toList() || []).toEqual([1]);
    })
});