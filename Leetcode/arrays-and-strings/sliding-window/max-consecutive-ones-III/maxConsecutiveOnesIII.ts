function findMaxConsecutiveOnesIII(nums: number[], k: number): number {
    let left = 0, curr = 0, ans = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            curr++;
        }

        while (curr > k) {
            if (nums[left] === 0) {
                curr -= 1;
            }

            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}

// Time: O(n);
// Space: O(n);

const result = findMaxConsecutiveOnesIII([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
console.log(result);
