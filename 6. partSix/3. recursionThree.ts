export function hanoi(n: number,source: number ,dest: number, aux: number) {
    if (n > 0) {
        hanoi(n - 1, source, aux, dest);
        console.log(`Disk from postition ${source} to ${dest}`)
        hanoi(n - 1, aux, dest, source);
    }
}

hanoi(3, 1, 3, 2);