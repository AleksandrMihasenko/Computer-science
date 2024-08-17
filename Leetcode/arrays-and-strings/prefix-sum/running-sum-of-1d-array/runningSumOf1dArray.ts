function runningSum(nums: number[]): number[] {
    const prefix = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    return prefix;
}

// Time: O(n);
// Space: O(1);

const result = runningSum([1, 2, 3, 4]);
console.log(result);
