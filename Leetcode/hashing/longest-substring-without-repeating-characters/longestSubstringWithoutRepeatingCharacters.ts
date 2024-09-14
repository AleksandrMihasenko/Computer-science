function lengthOfLongestSubstring(s: string): number {
    const map = new Map();
    let left = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        while (map.get(s[right]) > 1) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
}

// Time: O(2n) = O(n);
// Space: O(n);

const result = lengthOfLongestSubstring('abcabcbb');
console.log(result);
