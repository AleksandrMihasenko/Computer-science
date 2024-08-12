function maximumAverageSubarray(nums: number[], k: number): number {
    let sum = 0;
    let max: number;

    for (let i = 0; i < k; i++ ) {
        sum += nums[i]
    }

    max = sum / k;

    for (let i = k; i < nums.length; i++ ) {
        sum += nums[i] - nums[i - k]
        max = Math.max(max, sum / k)
    }

    return max;
}

// Time: O(n);
// Space: O(n);

const result = maximumAverageSubarray([1, 12, -5, -6, 50, 3], 4);
console.log(result);
