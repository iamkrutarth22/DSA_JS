export class ListNode{
    constructor(value){
        this.value = value
        this.next = null;
    }
}

export class LinkedList{
    constructor(value){
        const head = new ListNode(value);
        this.head = head;
    }

}


export function createList(values){
    const list = new LinkedList(values[0]);
    let current = list.head;
    for(let i = 1; i < values.length; i++){
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return list;
}

export function printList(list){
    let current = list.head;
    while(current){
         process.stdout.write(current.value + "->");
        current = current.next;
    }
}
