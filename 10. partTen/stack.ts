interface IStack {
    name: string,
    next: IStack | null
}

let stack: IStack | null = null;

const stackIsValid = (): boolean => {
    if(!stack) {
        console.log('Stack isnt created!');
        return false;
    }

    return true;
}

const showStack = (): void => {
    let copyStack: IStack | null = stack;

    if(!copyStack) {
        console.log('Nothing to show...');
        return
    };

    let iteration: number = 1;

    while (copyStack) {
        console.log(`Element ${iteration++}: ${copyStack.name}`);
        copyStack = copyStack.next;
    }
}

const addElements = (name: string, numberOfItemsToADD: number): void => {
    if (typeof(name) !== 'string' || typeof(numberOfItemsToADD) !== 'number') {
        console.log('Value not valid, name has to be string and numberOfItemsToADD a number');
        return
    }
    const resultStackIsValid: boolean = stackIsValid();

    if(!resultStackIsValid) {
        const newElement: IStack = {name, next: null};
        stack = newElement;
        console.log('Stack created!!!');
    }
    
    for (let i: number = 0; i < (!resultStackIsValid ? numberOfItemsToADD - 1 : numberOfItemsToADD); i++) {
        const newElement: IStack = {name, next: stack};
        stack = newElement;
    }
}

const removeElements = (numberOfItemsToPop: number): void => {
    if (!stackIsValid()) return;

    if (typeof(numberOfItemsToPop) !== 'number') {
        console.log('Value not valid, has to be a number');
        return
    }

    for (let i: number = 0; i < numberOfItemsToPop; i++) {
        if(stack) {
            stack = stack.next;
            continue
        }
        break; 
    }
}

addElements('Chocapic', 1);
addElements('Trix', 1);
addElements('Zukabliet', 1);
showStack();
console.log('----------------');
removeElements(1);
showStack();
console.log('----------------');
addElements('Zukabliet-Remasted', 1);
showStack();
console.log('----------------');
addElements('random', 8);
showStack();
console.log('----------------');
removeElements(10);
showStack();
