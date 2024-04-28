function myMap(array, cb) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
          result.push(cb(array[i], i, array));
    }

    return result;
}

const test = myMap([1, 2], (i) => i * 2);
