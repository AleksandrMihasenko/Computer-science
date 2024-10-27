function moveZeroes(nums: number[]): number[] {
    let pointer = 0;

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        nums[i] = 0;

        if (value !== 0) {
            nums[pointer] = value;
            pointer++;
        }
    }

    return nums;
}

// Time: O(n);
// Space: O(n);

const result = moveZeroes([0,1,0,3,12]);
console.log(result);
