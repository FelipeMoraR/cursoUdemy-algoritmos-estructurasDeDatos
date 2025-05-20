export const countDown: (num: number) => void = (num) => {
    console.log('Number::: ', num);
    if (num > 0) countDown(num - 1);
    else console.log('End');
}   

countDown(4);