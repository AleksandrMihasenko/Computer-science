function findMaxConsecutiveOnes(nums: number[]): number {
    let count = 0;
    let result = 0;

    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            result = Math.max(count, result);
            count = 0;
        }

    }

    return result;
}

// Time: O(n);
// Space: O(n);

const result = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
console.log(result);
