class ListNode {
    val: number;
    next: ListNode | null | undefined;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
 }

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

// Time: O(n);
// Space: O(1);

const head = new ListNode();
head.next = new ListNode(1);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(2);

const result = deleteDuplicates(head);
console.log(result);
