function myReduce(array, cb, initValue) {
    let acc = initValue ? initValue : array[0];
    const start = initValue ? 0 : 1;

    for (let i = start; i < array.length; i++) {
        acc = cb(acc, array[i], i, array);
    }

    return acc;
}

const numbers = [1, 2, 4, 6];

console.log(myReduce(numbers, (acc, current) => acc + current, 10));
