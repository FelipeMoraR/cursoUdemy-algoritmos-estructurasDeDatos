const searchNode = (num: number): void => {
    if (typeof(num) !== 'number') {
        console.log('Parameter has to be a number');
        return;
    }

    if (!tree) {
        console.log('Tree is empty');
        return;
    }

    let refOfNode: INode | null = tree;
    let iterations: number = 1;

    for (iterations; refOfNode; iterations++) {
        if (refOfNode.num === num) {
            console.log(`Number finded ${num} in ${iterations} iterations`);
            return;
        }

        if (refOfNode.num < num) {
            refOfNode = refOfNode.rigth;
        } else {
            refOfNode = refOfNode.left;
        }
    }

    console.log(`Number ${num} not finded`);
    return;
}

const deleteNode = (num: number): void => {
    if (typeof(num) !== 'number') {
        console.log('Parameter has to be a number');
        return;
    }

    if (!tree) {
        console.log('Tree is empty');
        return;
    }

    let refOfNode: INode | null = tree;
    let prevNode: INode | null = null;
    

    for (let iterations: number = 1; refOfNode; iterations++) {
        if (refOfNode.num === num) break
        prevNode = refOfNode;
        if (refOfNode.num < num) {
            refOfNode = refOfNode.rigth;
        } else {
            refOfNode = refOfNode.left;
        }
    }

    if (prevNode && (prevNode.left === null || prevNode.rigth === null)) {
        console.log('Value not finded');
        return;
    }
    
    if (prevNode && prevNode.num < num) {
        prevNode.rigth = null;
        return;
    }

    if (prevNode && prevNode.num > num) {
        prevNode.left = null;
        return;
    }
}


//recursive way
const deleteNodeRecursive = (node: INode | null, num: number): INode | null => {
    if (!node) {
        console.log('No more children');
        return null;
    }

    if (node.num < num) {
        node.rigth = deleteNodeRecursive(node.rigth, num);
        return node;
    } else if (node.num > num) {
        node.left = deleteNodeRecursive(node.left, num);
        return node;
    }

    return null;
}

const deleteNode2 = (num: number): void => {
    if (typeof(num) !== 'number') {
        console.log('Parameter has to be a number');
        return;
    }

    if (!tree) {
        console.log('Tree is empty');
        return;
    }

    deleteNodeRecursive(tree, num);

    if (tree === null) {
        console.log('Root of tree deleted');
        return
    }
}