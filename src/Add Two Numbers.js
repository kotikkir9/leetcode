function ListNode(val, next) {
   this.val = (val === undefined ? 0 : val)
   this.next = (next === undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
    let overflow = false;
    let head = null;
    let last = null;

    while(l1 || l2) {
        let calc = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);

        if(overflow) {
            calc++;
            overflow = false;
        }

        if(calc > 9) {
            overflow++;
            calc -= 10;
        }

        const node = new ListNode(calc);
        if(head) {
            last.next = node;
            last = node;
        } else {
            head = node;
            last = head;
        }

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }

    if(overflow) {
        const newNode = new ListNode(1);
        last.next = newNode;
    }
    
    return head;
}

const num1 = new ListNode(2, new ListNode(4, new ListNode(6)));
const num2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result = addTwoNumbers(num1, num2);
while(result) {
    console.log(result.val);
    result = result.next;
}