export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1
    }

    let tempList1: ListNode | null = list1;
    let tempList2: ListNode | null = list2

    while (tempList1 || tempList2) {
        if (!tempList2) {
            break;
        }

        if (!tempList1) {
            break;
        }

        if (tempList1.val > tempList2.val) {
            const tempVal = tempList1.val
            const tempNext = tempList1.next;
            tempList1.val = tempList2.val;
            tempList1.next = new ListNode(tempVal, tempNext)
            tempList1 = tempList1.next;
            tempList2 = tempList2.next;
        }
        else {
            if (!tempList1.next) {
                tempList1.next = tempList2;
                break
            }
            tempList1 = tempList1.next;
        }
    }

    return list1;
};

export default mergeTwoLists