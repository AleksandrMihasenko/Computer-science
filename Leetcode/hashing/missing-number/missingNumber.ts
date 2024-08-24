function missingNumber(nums: number[]): number {
    const map = new Map();

    for (let i = 0; i <= nums.length; i++) {
        map.set(nums[i], nums[i]);
    }

    for (let i = 0; i <= nums.length; i++) {
        if (!map.has(i)) return i;
    }

    return -1;
}

// Time: O(n);
// Space: O(n);

const result = missingNumber([3, 0, 1]);
console.log(result);
