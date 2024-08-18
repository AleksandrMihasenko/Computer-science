function minStartValue(nums: number[]): number {
    let total = 0;
    let minimum = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        minimum = Math.min(minimum, total);
    }

    return Math.abs(minimum) + 1;
}

// Time: O(n);
// Space: O(1);

const result = minStartValue([-3, 2, -3, 4, 2]);
console.log(result);
