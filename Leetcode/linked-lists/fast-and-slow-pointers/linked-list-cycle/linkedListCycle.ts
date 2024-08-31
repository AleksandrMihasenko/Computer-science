class ListNode {
    val: number;
    next: ListNode | null | undefined;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
 }

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;

    let slow = head?.next;
    let fast = head?.next?.next;

    while (fast && fast.next) {
        if (slow === fast) {
            return true
        }

        slow = slow?.next;
        fast = fast.next.next;
    }

    return false;
}

// Time: O(n);
// Space: O(1);

const head = new ListNode();
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4, head.next.next);

const result = hasCycle(head);
console.log(result);
