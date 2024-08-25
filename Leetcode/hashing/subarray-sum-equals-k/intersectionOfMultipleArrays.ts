function subarraySum(nums: number[], k: number): number {
    let current = 0;
    let answer = 0;
    const map = new Map();
    map.set(0, 1);

    for (const value of nums) {
        current += value;
        answer += map.get(current - k) ?? 0;
        map.set(current, (map.get(current) ?? 0) + 1);
    }

    return answer;
}

// Time: O(n);
// Space: O(n);

const result = subarraySum([1, 1, 1], 2);
console.log(result);
