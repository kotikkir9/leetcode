function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function isPalindrome(head) {
    const stack = [];
    while(head) {
        stack.push(head.val);
        head = head.next;
    }
    
    for(let i = 0; i < stack.length / 2; i++) {
        if(stack[i] !== stack[(stack.length - 1) - i])
            return false;
    }
    
    // let current = head;

    // while(current) {
    //     stack.push(current.val);
    //     current = current.next;
    // }

    // for(let i = 0; i <= stack.length / 2; i++) {
    //     if(head.val !== stack.pop()) 
    //         return false;
        
    //     head = head.next;
    // }

    // while(head) {
    //     if(head.val !== stack.pop()) 
    //         return false;
        
    //     head = head.next;
    // }

    return true;
}

let list = new ListNode(2, new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(2)))));
// list = new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(2))));
console.log(isPalindrome(list));