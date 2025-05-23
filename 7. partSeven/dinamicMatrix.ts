import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ask: (question: string) => Promise<string> = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer))
    })
}



const createDinamicMatrix = async () => {
    const numRows: number = Number(await ask('Tell me the num of rows: '));
    if(!numRows) {
        console.error('Num rows not valid, insert a number.')
        rl.close();
        return
    }

    let pointer: Array<Array<number>> | null = new Array(numRows);
    

    for (let i: number = 0; i < numRows; i++) {
        const numColums: number = Number(await ask(`Tell me the num of colums of the row ${i + 1}: `));
        
        if(!numColums) {
            console.error('invalid num of columns');
            rl.close();
            return
        }
        
        const newArrayColums: Array<number> = new Array(numColums);
        for(let j: number = 0; j < numColums; j++) {
            newArrayColums[j] = (i + 1) ** (j + 1);
        }
        pointer[i] = newArrayColums;
    }
    console.log(pointer);
    
    // NOTE freeing memory 
    pointer = null 

    rl.close();
    return
}

createDinamicMatrix();