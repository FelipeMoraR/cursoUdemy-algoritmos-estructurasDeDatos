// With this i'm making 2 visit at the same node
const inorder = (aux: INode | null): void => {
    if(!aux) return;
    
    inorder(aux.left);
    console.log('num: ', aux.num);
    inorder(aux.rigth);
}

const preorder = (aux: INode | null): void => {
    if(!aux) return;

    console.log('num: ', aux.num);
    preorder(aux.left);
    preorder(aux.rigth);
}

const postOrder = (aux: INode | null): void => {
    if(!aux) return;
    
    postOrder(aux.left);
    postOrder(aux.rigth);
    console.log('num: ', aux.num);
    
}