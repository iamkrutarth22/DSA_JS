// class Node {
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// class LinkedList{
//     constructor (value){
//         let newNode=new Node(value);

//         this.head=newNode;
//         this.tail=this.head;
//         this.length=1;
//     }

//     push(value){
//         let newNode=new Node(value);
//         if(!this.head){
//             this.head=newNode;
//             this.tail=newNode;
//         }
//         else{
//             this.tail.next=newNode
//             this.tail=newNode
//         }
//         this.length++;
//         return this
//     }

//     pop(){
//         let temp=this.head;
//         let prev=this.head

//         if(this.head===null)
//             return this

//         if(this.head.next===null){
//             this.head=null;
//             this.tail=null;
//             this.length--
//             return this;
//         }

//         while(temp.next!=null){
//             prev=temp
//             temp=temp.next;

//         }

//         this.tail=prev
//         this.tail.next=null
//         this.length--
//         return temp
//     }

//     printList(){
//         let currentNode=this.head;
//         if(this.head===null){
//             console.log('null')
//             return thiszzz
//         }
//         while(currentNode.next!=null){
//             process.stdout.write(currentNode.value+"->");
//             currentNode=currentNode.next;
//         }
//         console.log("null")
//     }

// }
// let myLinkedList=new LinkedList(4);
// myLinkedList.push(5)
// myLinkedList.push(6)
// myLinkedList.push(7)
// myLinkedList.push(8)
// console.log(myLinkedList);
// console.log("linked list is:");
// myLinkedList.printList()

// const temp=myLinkedList.pop()

// console.log("linked list is:");
// myLinkedList.printList()
// console.log(temp)
console.log("ksks");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    }

    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null || this.head.next === null) {
      this.head = null;
      this.length--;
      return null;
    }

    let temp = this.head;
    let prev = null;

    while (temp.next != null) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = temp.next;
    this.length--;
    return temp;
  }

  addAtBeg(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;

      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  //   addAtIndex(value,index){
  //     let temp=this.head;
  //     if()
  //     while()

  //   }
  delAtStart() {
    if (this.head === null || this.head.next === null) {
      this.head = null;
      return this.head;
    }

    let temp = this.head;
    this.head = temp.next;
    return temp;
  }

  search(item) {
    let temp = this.head;
    while (temp != null) {
      if (temp.value == item) return true;
      temp = temp.next;
    }
    return false;
  }

  reverse() {
    if (this.head === null || this.head.next === null) return this;

    let temp = this.head;
    let next = temp;
    let prev = null;

    while (temp != null) {
      next = next.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    this.head = prev;
  }

  printList() {
    if (this.head === null) {
      console.log("List is empty");
      return null;
    }

    let start = this.head;
    console.log("LinkedList:");
    while (start != null) {
      process.stdout.write(start.value + "->");
      start = start.next;
    }
    process.stdout.write("null");

    console.log("");
  }

  middle() {
    let slow = this.head;
    let fast = this.head;

    if (this.head === null) return null;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value;
  }

  valueFromEnd(n) {
    if (this.head === null) return null;
    let temp = this.head;
    let i = 1;
    while (i < n && temp != null) {
      temp = temp.next;
      i++;
    }

    let item = this.head;
    while (temp != null) {
      item = item.next;
      temp = temp.next;
    }

    return item.value;
  }

  removeDuplicate() {
    if (this.head === null) return null;

    let curr = this.head;
    let runner = curr;
    while (curr && curr.next) {
      runner = curr;
      while (runner && runner.next) {
        if (runner.next.value === curr.value) {
          runner.next = runner.next.next;
        } else runner = runner.next;
      }
      curr = curr.next;
    }
  }
  static sumOfLists(L1, L2) {
    const dummy = new Node(0);
    let curr = dummy;
    let sum = 0;
    let carry = 0;
    while (L1 && L2) {
      sum = L1.value + L2.value + carry;
      carry = Math.floor(sum / 10);
      sum = sum % 10;
  
      let newNode = new Node(sum);
      curr.next = newNode;
      curr = curr.next;
      L1 = L1.next;
      L2 = L2.next;
    }
  
    if (L1 != null) {
      while (L1) {
        sum = L1.value + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
  
        let newNode = new Node(sum);
        curr.next = newNode;
        curr = curr.next;
        L1 = L1.next;
      }
    }
    if (L2 != null) {
      while (L2) {
        sum = L2.value + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
  
        let newNode = new Node(sum);
        curr.next = newNode;
        curr = curr.next;
        L2 = L2.next;
      }
    }
    if (carry > 0) {
      let newNode = new Node(carry);
      curr.next = newNode;
      curr = curr.next;
    }
    return dummy.next;
  }
}

const myList = new LinkedList(3);
// // console.log(myList)
myList.push(4);
myList.push(4);
myList.pop();

myList.addAtBeg(2);
myList.addAtBeg(6);
myList.delAtStart();

myList.push(5);
myList.addAtBeg(1);
myList.printList();
myList.reverse();
// myList.pop()
myList.printList();

console.log("middle=", myList.middle());
console.log("3rd last item =", myList.valueFromEnd(4));
console.log(myList.search(3));

const list2 = new LinkedList(1);
list2.push(1);
list2.push(1);
list2.push(1);
list2.push(2);
list2.push(3);
list2.push(3);
list2.push(1);
list2.push(1);
list2.push(3);

list2.printList();
list2.removeDuplicate();
list2.printList();

let l1 = new LinkedList(9);
l1.push(9);
l1.push(9);
l1.push(9);
l1.push(9);
let l2 = new LinkedList(1);
// l2.push(9);

let result =LinkedList.sumOfLists(l1.head, l2.head)

console.log(result)