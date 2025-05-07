//Verify palindrome

//V1 in this case is i lear a new thing but this was innecesary, but works with out the accents
const isPalindrome: (word: string) => boolean = (word) => {
    //Objects and Array have share references
    //Primitive values doesnt have share references (string, number, boolean, null, undefined, symbol y bigint)
    const wordParced: Array<string> = word.toLowerCase().split('');
    //wordParced is an array, this array use space in memory, because is mutable, so if you don use [...wordParced] we will change directly wordParced and we are not creating a new space in memory, this two elements are the same
    const reverseWord: Array<string> = [...wordParced].reverse().filter(el => el !== ' ');
    const blankSpaces: Array<number> = [...wordParced].map((word, index) => word === ' ' ? index : null).filter(el => el !== null);
    
    blankSpaces.forEach(space => reverseWord.splice(space, 0, ' '))

    //Word is a primitive value (string) thats is why this doesnt change in the second console.log
    //console.log(word);
    //word.toLowerCase();
    //console.log(word);

    return reverseWord.join('') === word.toLowerCase();
}

const result: boolean = isPalindrome('A mamá Roma le aviva el amor a mamá');

console.log(result);


//Solution
export function esPalindromo(frase: string): boolean {
    const limpio = frase
        .toLowerCase()
        .normalize('NFD')   // Normaliza para separar los acentos
        .replace(/[\u0300-\u036f]/g, '');  // Elimina los caracteres diacríticos (acentos)

    // Imprime los valores de la cadena normalizada y sin acentos.
    console.log('Texto normalizado:', frase.normalize('NFD'));  
    console.log('Texto limpio sin acentos:', limpio);
    
    const invertido = limpio.split('').reverse().join('');
    console.log('Texto invertido:', invertido);

    return limpio === invertido;
}

