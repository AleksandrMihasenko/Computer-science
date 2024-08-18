function getAverages(nums: number[], k: number): number[] {
    if (k < 1) return nums;

    const size = 2 * k + 1;
    const result = new Array(nums.length).fill(-1);
    const prefix = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; ++i) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    for (let i = k; i < (nums.length - k); ++i) {
        const arraySum = prefix[i + k + 1] - prefix[i - k];
        result[i] = Math.floor(arraySum / size);
    }

    return result;
}

// Time: O(n);
// Space: O(1);

const result = getAverages([7,4,3,9,1,8,5,2,6], 3);
console.log(result);
