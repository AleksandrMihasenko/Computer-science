function sortedSquares(nums: number[]): number[] {
    const result: number[] = [];
    let left = 0;
    let right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = Math.pow(nums[left], 2);
            left++;
            console.log(result);
        } else {
            result[i] = Math.pow(nums[right], 2);
            right--;
            console.log(result);
        }
    }

    return result;
}

// Time: O(n);
// Space: O(n);

const result = sortedSquares([-14, -1, 0, 3, 10]);
console.log(result);
