interface INode {
    num: number,
    rigth: INode | null,
    left: INode | null
}

let node: INode | null = null;

const addNewNode = (num: number): void => {
    if (typeof(num) !== 'number') {
        console.log('Num must be a number.');
        return;
    }

    const newNode: INode = {num, rigth: null, left: null}

    if (!node) {
        node = newNode;
        console.log('New tree started!!');
        return;
    }

    let refOfNode: INode | null = node;
    let lastNode: INode | null = null;

    //Bigger to rigth, smaller to left;
    while (refOfNode) {
        lastNode = refOfNode;
        if (refOfNode.num < num) {
            refOfNode = refOfNode.rigth;
        }
        else {  
            refOfNode = refOfNode.left;
        }
    }

    if (lastNode && lastNode.num < num ) {
        lastNode.rigth = newNode;
        console.log('New node added to rigth!!');
        return;
    } 

    if(lastNode && lastNode.num > num) {
        lastNode.left = newNode;
        console.log('New node added to left!!');
        return;
    }

    console.log('Something happened, nothing added :(');
    return;
}

addNewNode(4);
addNewNode(8);
addNewNode(0);
addNewNode(-4);
addNewNode(5);
addNewNode(2);
addNewNode(9);
console.log(node);
