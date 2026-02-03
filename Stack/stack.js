class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(value){
        const newItem= new Node (value)
        this.top=newItem;
        this.length=1;
    }

    push(value){
        const newItem=new Node(value)
        if(this.top===null){
            this.top=newItem
            this.length=1
        }else{
            newItem.next= this.top;
            this.top=newItem
        }
        return this
    }

    pop(){
        if(this.top===null)
            return undefined
        const temp= this.top
        this.top=this.top.next
        temp.next=null
        this.length--
        return temp
    }
}

const str="krutarth"
for(i in str){
    console.log('-',str[i])
}

let myStack=new Stack(1);
myStack.push(2)
myStack.push(3)
myStack.pop()
console.log(myStack)