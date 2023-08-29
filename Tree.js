import mergeSort from "./mergeSort.js";
import removeDuplicates from "./removeDuplicates.js";
import Node from "./Node.js";

export default class Tree {
    constructor(array) {
        this.array = removeDuplicates(mergeSort(array));
        this.root = this.build(this.array);
    }
    build(array) {
        if (array.length === 0) return null;
        const midPoint = Math.floor(array.length / 2);
        const left = array.slice(0, midPoint);
        const right = array.slice(midPoint + 1);
        const data = array[midPoint];
        /* 
        console.log(array);
        console.log(data);
        console.log(left);
        console.log(right); */
        return new Node(data, this.build(left), this.build(right));
    }
    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(
                node.right,
                `${prefix}${isLeft ? "│   " : "    "}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(
                node.left,
                `${prefix}${isLeft ? "    " : "│   "}`,
                true
            );
        }
    }
}

const tree = new Tree([6, 4, 9, 23, 45, 87, 2, 5, 1, 87, 2, 87]);
tree.prettyPrint();
