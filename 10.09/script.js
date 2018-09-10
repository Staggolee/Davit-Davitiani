class Node {
    constructor( value = null, left = null, right = null){
        this.left = left;
        this.right = right;
        this.value = value;
    }

}

class BST {
    constructor(){
        this.root = null;
    }

    addNode(value){
        if( this.root === null){
            this.root = new Node(value);
        }
        else {
            let currentRoot = this.root;

            while(true){
                if( currentRoot.value > value){
                    if( currentRoot.left){
                        currentRoot = currentRoot.left;
                    }
                    else {
                        currentRoot.left = new Node(value);
                        break;
                    }
                }
                else{
                    if( currentRoot.right){
                        currentRoot = currentRoot.right;
                    }
                    else {
                        currentRoot.right = new Node(value);
                        break;
                    }
                }
            
            }
        }

        return this;


    }
}
    
let numbers = [3,5,7,8,10,2,1,4,5];
let myBST = new BST();
numbers.map( num => myBST.addNode(num) );

console.log(myBST);


