function largestUniqueNumber(nums: number[]): number {
    const map = new Map();
    let result = -1;

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // @ts-ignore
    for (const [key, value] of map.entries()) {
        if (value <= 1 && key > result) {
            result = key;
        }
    }

    return result;
}

// Time: O(n);
// Space: O(n);

const result = largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]);
console.log(result);
