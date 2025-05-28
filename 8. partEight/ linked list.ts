interface elementLinkedList {
    name: string,
    age: number,
    next: elementLinkedList | null 
}

let pointer: elementLinkedList | null = null;

// Linked List
const insertElementLinkedList = (name: string, age: number, position: number): void => {
    if(position < 0) {
        console.log('Position must be bigger than 0');
        return;
    }

    const newElement: elementLinkedList = {name, age, next: position === 1 ? pointer : null};
    let newInstanceOfPointer: elementLinkedList | null = pointer; // creating a reference to iterate it 

    if (!pointer || position === 1) {
        pointer = newElement;
        console.log(name, 'Was added to the linked list !!!');
        return
    }

    let i: number = 1;

    for (i; newInstanceOfPointer; i++) {
        if (i === position - 1) break; // This take the previous element to add the new element next to it
        newInstanceOfPointer = newInstanceOfPointer.next;
    }
    
    if (newInstanceOfPointer) {
        // Now C has the rest o values of the list
        newElement.next = newInstanceOfPointer.next;
        // Now A has C as next node
        newInstanceOfPointer.next = newElement;
        return;
    }
    
    if(i < position) {
        console.log('position out of range');
        return
    }
}

const deleteElementLinkedList = (position: number) => {
    if(position < 1) {
        console.log('Position must be bigger than 0');
        return;
    }

    if(!pointer) {
        console.log('Pointer is empty');
        return;
    }

    if(position === 1) {
        pointer = pointer.next;
        console.log(`Position ${position} eliminated`);
        return;
    }

    let prevElementToEliminate: elementLinkedList | null = pointer;
    let i: number = 1;

    for (i; prevElementToEliminate; i++) {
        if(i === position - 1) break;
        prevElementToEliminate = prevElementToEliminate.next;
    }

    const elementToDelete: elementLinkedList | null = prevElementToEliminate ? prevElementToEliminate.next : null;
    
    if (prevElementToEliminate && elementToDelete) {
        prevElementToEliminate.next = elementToDelete.next;
        console.log(`Position ${position} eliminated`);
        return;
    }

    if (i < position) {
        console.log(`Max value avaible: ${i}`);
        return;
    }
}

const showLinkedList = (): void => {
    let localPointer: elementLinkedList | null = pointer;

    for (let i: number = 1; localPointer; i++) {
        console.log('position ' + i + ': ' + localPointer.name);
        localPointer = localPointer.next;
    }
}

insertElementLinkedList('mora', 12, 1);
insertElementLinkedList('diego', 15, 1);
insertElementLinkedList('juan', 25, 1);
insertElementLinkedList('renato', 252, 1);
insertElementLinkedList('pedro', 25, 3);
showLinkedList();

console.log('.........................................');

deleteElementLinkedList(6);
showLinkedList();