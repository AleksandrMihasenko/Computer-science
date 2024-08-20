function waysToSplitArrayOneApproach(nums: number[]): number {
    const prefix = [nums[0]];
    let result = 0;

    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[i - 1]);
    }

    for (let i = 0; i < prefix.length - 1; i++) {
        if (prefix[i] >= prefix[prefix.length - 1] - prefix[i]) {
            result++;
        }
    }

    return result;
}

// Time: O(n);
// Space: O(n);

const resultOne = waysToSplitArrayOneApproach([10, 4, -8, 7]);
console.log(resultOne);

function waysToSplitArraySecondApproach(nums: number[]): number {
    let result = 0;
    let total = 0;
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    for (let i = 0; i < nums.length - 1; i++) {
        left += nums[i];
        const right = total - left;

        if (left >= right) result++;
    }

    return result;
}

// Time: O(n);
// Space: O(1);

const resultTwo = waysToSplitArraySecondApproach([10, 4, -8, 7]);
console.log(resultTwo);
