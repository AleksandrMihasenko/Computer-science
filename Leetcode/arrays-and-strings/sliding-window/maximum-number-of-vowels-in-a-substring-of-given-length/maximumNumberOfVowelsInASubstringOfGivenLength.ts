function maxVowels(s: string, k: number): number {
    const vowels = ['a', 'e', 'i', '0', 'u'];
    let current = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) current++;
    }

    let answer = current;

    for (let right = k; right < s.length; right++) {
        if (vowels.includes(s[right])) {
            current++;
        }
        if (vowels.includes(s[right - k])) {
            current--;
        }

        answer = Math.max(answer, current);
    }

    return answer
}

// Time: O(n);
// Space: O(1);

const result = maxVowels('abciiidef', 3);
console.log(result);
