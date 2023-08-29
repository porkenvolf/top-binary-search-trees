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
    insert(value, node = this.root) {
        // exit condition
        if (node === null) return;

        let nextNode;
        if (value === node.data) {
            return;
        } else if (value < node.data) {
            nextNode = node.left;
            if (nextNode === null) node.left = new Node(value);
        } else if (value > node.data) {
            nextNode = node.right;
            if (nextNode === null) node.right = new Node(value);
        }
        this.insert(value, nextNode);
    }
    find(value, node = this.root) {
        if (node === null) return;

        let nextNode;
        if (value === node.data) {
            return node;
        } else if (value < node.data) {
            nextNode = node.left;
        } else if (value > node.data) {
            nextNode = node.right;
        }
        return this.find(value, nextNode);
    }
    /* 
    delete(value, node = this.root) {

        // exit condition
        if (node === null) return

        let children;
        for (const key in node) {
            if (node[key]) children += 1;
        }
        return children;
    } */
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
console.clear();
tree.insert(24);
tree.insert(25);
console.log(tree.find(23));
tree.prettyPrint();
