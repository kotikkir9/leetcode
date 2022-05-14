function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


function middleNode(head) {
    let counter = 0; 
    let current = head;


    while(current) {
        ++counter;
        current = current.next;
    }

    for(let i = 0; i < (parseInt(counter / 2)); ++i) {
        head = head.next;
    }
    
    return head;
}

function middleNodeFaster(head) {
    const nodes = [];
    while(head) {
        nodes.push(head);
        head = head.next;
    }

    return nodes[parseInt(nodes.length / 2)]
}

// Solution on Leetcode
function fastest(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

let firstNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// firstNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(middleNodeFaster(firstNode).val);
