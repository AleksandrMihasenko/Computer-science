function countElements(arr: number[]): number {
    const map = new Map();
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], 0);
    }

    for (const key of arr) {
        if (map.has(key + 1)) result++;
    }

    return result;
}

// Time: O(n);
// Space: O(n);

const result = countElements([1, 2, 3]);
console.log(result);
