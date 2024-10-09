function intersection(nums: number[][]): number[] {
    const map = new Map();
    const result = [];

    for (const arr of nums) {
        for (const elem of arr) {
            map.set(elem, (map.get(elem) || 0) + 1)
        }
    }

    // @ts-ignore
    for (const [key, value] of map.entries()) {
        if (value === nums.length) {
            result.push(key);
        }
    }

    return result.sort((a, b) => a - b);
}

// Time: O(m * (n + log m));
// Space: O(n * m);

const result = intersection([[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]);
console.log(result);
