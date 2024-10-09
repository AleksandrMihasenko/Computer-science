function numberOfSubarrays(nums: number[], k: number): number {
    let current = 0;
    let answer = 0;
    let map = new Map();
    map.set(0, 1);

    for (const num of nums) {
        current += num % 2;
        answer += map.get(current - k) ?? 0;
        map.set(current, (map.get(current) ?? 0) + 1);
    }

    return answer;
}

// Time: O(n);
// Space: O(n);

const result = numberOfSubarrays([1, 1, 2, 1, 1], 3);
console.log(result);
