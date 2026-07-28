console.log('hell')

//induction 
//base condition , smallest input possible
function print(n){
    if(n===0) 
        return ;
    print(n-1);
    console.log(n);
}

print(8)


class Node{
    constructor(value){
        this.value=value;
        this.leftPtr= null;
        this.rightPtr = null;
    }
}

class Tree{
    constructor(value){
        this.root = new Node(value);
    }
}

const binaryTree = new Tree(8);
binaryTree.root.rightPtr = new Node(6);
binaryTree.root.leftPtr = new Node(5);

binaryTree.root.rightPtr.rightPtr = new Node(4);
binaryTree.root.rightPtr.rightPtr.rightPtr = new Node(3);
binaryTree.root.rightPtr.leftPtr= new Node(2);


console.log(binaryTree);

const height = (root)=>{
    if(root === null){
        return 0
    }

    const heightRight = height(root.rightPtr);
    const heightLeft = height(root.leftPtr);

    return heightLeft>heightRight ? heightLeft+1:heightRight+1;
}


console.log("height of binary tree ", height(binaryTree.root))