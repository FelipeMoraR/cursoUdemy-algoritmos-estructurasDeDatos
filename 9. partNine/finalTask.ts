interface IRegisterQueue {
    name: string,
    next: IRegisterQueue | null
};

const createRegister = (numOfRegisters: number): Array<null | IRegisterQueue> | null => {
    if (typeof (numOfRegisters) !== 'number') {
        console.log('Invalid value, only numbers');
        return null;
    }

    const newArrayPointers = new Array(numOfRegisters).fill(null);

    return newArrayPointers;
}

let registers: Array<null | IRegisterQueue> | null = createRegister(3);

const enqueueToRegister = (name: string, numRegister: number): void => {
    if (!registers) {
        console.log('Registers not created!');
        return
    }

    if (typeof (numRegister) !== 'number' || typeof (name) !== 'string') {
        console.log('Invalid value');
        return;
    }

    if (registers.length < numRegister) {
        console.log(`Register selected not exist, please select one between 1 to ${registers.length}`);
        return
    }

    const newCustomerInRegister: IRegisterQueue = { name, next: null };
    let current: IRegisterQueue | null = registers[numRegister - 1];
    let copyOfCurrent = current;

    if (!current) {
        registers[numRegister - 1] = newCustomerInRegister;
        console.log(`${name} added!`);
        return;
    }

    while (current.next) {
        current = current.next;
    }

    current.next = newCustomerInRegister;

    if (current) { 
        registers[numRegister - 1] = copyOfCurrent;
        console.log(`${name} added!`);
        return;
    }
}

const dequeueRegister = (numRegister: number): void => {
    if(!registers) return;

    if (typeof (numRegister) !== 'number') {
        console.log('Invalid value, only numbers');
        return;
    }

    let currentRegisterHead = registers[numRegister - 1];

    if (currentRegisterHead === null) {
        console.log('Register is already empty, nothing to dequeue.');
        return;
    }

    if (currentRegisterHead.next === null) {
        console.log(`Dequeueing the first customer from this register ${numRegister}`);
        registers[numRegister - 1] = null; 
        return;
    }

    registers[numRegister - 1] = currentRegisterHead.next;
    console.log(`Dequeueing the first customer from this register ${numRegister}`);
    return;
}

if (registers) {
    enqueueToRegister('felipe', 1);
    enqueueToRegister('diego', 1);
    enqueueToRegister('matias', 1);
    enqueueToRegister('luis', 1);
    enqueueToRegister('pedro', 2);
    enqueueToRegister('juan', 3);
    console.log(registers);
    console.log('------------------------------');
    dequeueRegister(3);
    console.log(registers);
    console.log('------------------------------');
    dequeueRegister(1);
    console.log(registers);
    console.log('------------------------------');
    dequeueRegister(1);
    console.log(registers);
} else {
    console.log('No register created');
}
