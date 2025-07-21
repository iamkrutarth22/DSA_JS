class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor (value){
        let newNode=new Node(value);
        this.head=newNode;
        this.tail=this.head;
        this.length=1;
    }
    
    push(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++;
        return this
    }

    pop(){
        let temp=this.head;
        let prev=this.head

        if(this.head===null)
            return this

        if(this.head.next===null){
            this.head=null;
            this.tail=null;
            this.length--
            return this;
        }

        while(temp.next!=null){
            prev=temp
            temp=temp.next;
            
        }
        
        this.tail=prev
        this.tail.next=null
        this.length--
        return temp
    }

    printList(){
        let currentNode=this.head;
        if(this.head===null){
            console.log('null')
            return thiszzz
        }
        while(currentNode.next!=null){
            process.stdout.write(currentNode.value+"->");
            currentNode=currentNode.next;
        }
        console.log("null")
    }



}
let myLinkedList=new LinkedList(4);
myLinkedList.push(5)
myLinkedList.push(6)
myLinkedList.push(7)
myLinkedList.push(8)
console.log(myLinkedList);
console.log("linked list is:");
myLinkedList.printList()

const temp=myLinkedList.pop()


console.log("linked list is:");
myLinkedList.printList()
console.log(temp)