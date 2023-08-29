import mergeSort from "./mergeSort.js";
import removeDuplicates from "./removeDuplicates.js";
import Node from "./Node.js";

export default class Tree {
    constructor(array) {
        this.array = removeDuplicates(mergeSort(array));
        this.root = this.build(this.array);
    }
    build(array, parent = null) {
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
        const newNode = new Node(data, parent);
        newNode.left = this.build(left, newNode);
        newNode.right = this.build(right, newNode);
        return newNode;
    }
    insert(value, node = this.root) {
        // exit condition
        if (node === null) return;

        let nextNode;
        if (value === node.data) {
            return;
        } else if (value < node.data) {
            nextNode = node.left;
            if (nextNode === null) node.left = new Node(value, node);
        } else if (value > node.data) {
            nextNode = node.right;
            if (nextNode === null) node.right = new Node(value, node);
        }
        this.insert(value, nextNode);
    }
    find(value, node = this.root) {
        if (node === null) return null;

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

    delete(value, node = this.root) {
        const toDelete = this.find(value);
        const parent = this.find(toDelete.parent);

        // determine amount of children of node to delete
        let children;
        if (toDelete.left && toDelete.right) children = 2;
        else if (!toDelete.left && !toDelete.right) children = 0;
        else children = 1;

        // proceed to delete
        if (children === 0) {
            parent.right === toDelete
                ? (parent.right = null)
                : (parent.left = null);
        } else if (children === 1) {
            const substitute = toDelete.left || toDelete.right;
            parent.right === toDelete
                ? (parent.right = substitute)
                : (parent.left = substitute);
        } else if (children === 2) {
            const substitute = this.smallest(toDelete.right);

            // is root?
            if (parent === null) {
                this.find(substitute.parent).left = substitute.right;
                substitute.left = toDelete.left;
                substitute.right = toDelete.right;
                substitute.parent = null;
                this.root = substitute;
            } else {
                if (this.find(substitute.parent) !== toDelete) {
                    this.find(substitute.parent).left = substitute.right;
                    substitute.right = toDelete.right;
                }
                substitute.left = toDelete.left;
                substitute.parent = toDelete.parent;
                parent.right === toDelete
                    ? (parent.right = substitute)
                    : (parent.left = substitute);
            }
        }
    }
    smallest(node = this.root) {
        if (node.left === null) return node;

        return this.smallest(node.left);
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

const tree = new Tree([7, 4, 9, 23, 45, 87, 2, 5, 1, 87, 2, 87]);
console.clear();
tree.insert(10);
tree.insert(46);
tree.insert(6);
tree.prettyPrint();
tree.delete(4);
//console.log(tree.root);
tree.prettyPrint();
