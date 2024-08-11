function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    let j = 0;
    
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }

        j++;
    }
    return i === s.length;
}

// Time: O(n);
// Space: O(n);

const result = isSubsequence('abc', 'ahbgdc');
console.log(result);
