function findMaxLength(nums: number[]): number {
    let map = new Map();
    let maxLength = 0;
    let count = 0;

    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        count = count + (nums[i] === 1 ? 1 : -1);

        if (map.has(count)) {
            maxLength = Math.max(maxLength, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }

    return maxLength;
}

// Time: O(n);
// Space: O(n);

const result = findMaxLength([0, 1, 0]);
console.log(result);
