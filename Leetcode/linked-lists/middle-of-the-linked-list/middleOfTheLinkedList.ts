class ListNode {
    val: number;
    next: ListNode | null | undefined;

    constructor(val: number = 0, next: ListNode | null | undefined = null) {
        this.val = val;
        this.next = next;
    }
}

function middleNode(head: ListNode | null | undefined): ListNode | null | undefined {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow?.next;
        fast = fast.next.next;
    }

    return slow;
}

// Time: O(n);
// Space: O(1);

 const head = new ListNode();
 head.next = new ListNode(1);
 head.next.next = new ListNode(2);
 head.next.next.next = new ListNode(3);
 head.next.next.next.next = new ListNode(4);
 head.next.next.next.next.next = new ListNode(5);

const result = middleNode(head);
console.log(result);
