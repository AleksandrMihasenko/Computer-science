class ListNode {
    val: number;
    next: ListNode | null | undefined;

    constructor(val: number = 0, next: ListNode | null | undefined = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseBetween(head: ListNode | null | undefined, left: number, right: number): ListNode | null {
    let prev = null;
    let current = head;

    while (left > 1) {
        prev = current;
        current = current?.next;
        left--;
        right--;
    }

    let con = prev,
        tail = current;
    let third = null;

    while (right > 0) {
        third = current?.next;
        current!.next = prev;
        prev = current;
        current = third;
        right--;
    }

    if (con !== null) {
        con!.next = prev;
    } else {
        head = prev;
    }

    tail!.next = current;

    return head as ListNode;
}

// Time: O(n);
// Space: O(1);

 const head = new ListNode();
 head.next = new ListNode(1);
 head.next.next = new ListNode(2);
 head.next.next.next = new ListNode(3);
 head.next.next.next.next = new ListNode(4);
 head.next.next.next.next.next = new ListNode(5);

const result = reverseBetween(head, 2, 4);
console.log(result);
