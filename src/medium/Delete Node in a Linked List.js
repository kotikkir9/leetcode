function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
    let prev = null;

    while (node.next) {
        const next = node.next;
        node.val = next.val;
        prev = node;
        node = node.next;
    }

    prev.next = null;
}