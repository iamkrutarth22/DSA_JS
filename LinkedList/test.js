import { ListNode } from './CLinkedList.js';
import { LinkedList } from './CLinkedList.js';
import { createList, printList } from './CLinkedList.js';


const list = createList([1, 2, 3, 4, 5]);
printList(list);


function reverseList(head){
    let curr = head;
    let prev = null;
    let nextPtr = null;

    while( curr != null){
        nextPtr = curr.next;
        curr.next = prev;
        prev = curr ;
        curr = nextPtr;

    }

    return prev;
}

const reversedList = reverseList(list);
console.log("\nreverse:")
printList(reverseList);
