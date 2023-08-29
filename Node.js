export default class Node {
    constructor(
        data = null,
        parent = { data: null },
        left = null,
        right = null
    ) {
        this.data = data;
        this.parent = parent ? parent.data : null;
        this.left = left;
        this.right = right;
    }
}
