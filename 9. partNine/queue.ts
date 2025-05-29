interface IQueue {
    name: string,
    next: IQueue | null
}

let head: IQueue | null = null;
let tail: IQueue | null = null;

const printQueue = (): void => {
    let copyQueue: IQueue | null = head;

    if (!copyQueue) {
        console.log('Queue empty');
        return;
    }

    for (let i: number = 1; copyQueue; i++) {
        console.log(`Position ${i}: ${copyQueue.name}`);
        copyQueue = copyQueue.next;
    }
}

const enqueue = (name: string): void => {
    const newElement: IQueue = { name, next: null}

    if(!head) {
        head = newElement;
        tail = newElement;
        console.log(`${name} added!`);
        return;
    }

    if (tail) {
        tail.next = newElement; // Add a new element in the tail
        tail = tail.next; // And we change the reference to the old one, here we are not changing the queue, just 'iterating' it
        console.log(`${name} added!`);
    }
    console.log(head);
}

const dequeue = (): void => {
    if(!head) {
        console.log('Nothing to delete');
        return;
    }
    
    console.log(`Delenting ${head.name}...`)
    head = head ? head.next : null;
    return
}

enqueue('Felipe');
enqueue('Diego');
enqueue('Matias');
printQueue();
console.log('-----------------');
dequeue();
printQueue();
console.log('-----------------');
dequeue();
printQueue();
console.log('-----------------');
dequeue();
printQueue();