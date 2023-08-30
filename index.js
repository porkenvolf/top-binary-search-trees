import Tree from "./Tree.js";

function randomArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    return array;
}

/* Create a binary search tree from an array of random numbers < 100. 
You can create a function that returns an array of random numbers every 
time you call it, if you wish.*/
const tree = new Tree(randomArray(20));
tree.prettyPrint();
/* Confirm that the tree is balanced by calling isBalanced.*/
console.log("IS BALANCED: " + tree.isBalanced());

/* Print out all elements in level, pre, post, and in order. */
console.log("INORDER: " + tree.inorder());
console.log("PREORDER: " + tree.preorder());
console.log("POSTORDER: " + tree.postorder());
console.log("LEVEL ORDER: " + tree.levelOrder());

/* Unbalance the tree by adding several numbers > 100. */
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.prettyPrint();

/* Confirm that the tree is unbalanced by calling isBalanced. */
console.log("IS BALANCED: " + tree.isBalanced());

/* Balance the tree by calling rebalance.*/
tree.rebalance();
tree.prettyPrint();
console.log("IS BALANCED: " + tree.isBalanced());

/* Print out all elements in level, pre, post, and in order. */
console.log("INORDER: " + tree.inorder());
console.log("PREORDER: " + tree.preorder());
console.log("POSTORDER: " + tree.postorder());
console.log("LEVEL ORDER: " + tree.levelOrder());
