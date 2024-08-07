function removeElement(nums: number[], val: number): number {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }

    return index;
}

const result = removeElement([3,2,2,3], 3);
console.log(result);
