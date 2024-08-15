function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) return 0;

    let left = 0;
    let current = 1;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {
        current *= nums[right];

        while (current >= k) {
            current /= nums[left];
            left++;
        }

        answer += right - left + 1;
    }

    return answer;
}

// Time: O(n);
// Space: O(n);

const result = numSubarrayProductLessThanK([10,5,2,6], 100);
console.log(result);
