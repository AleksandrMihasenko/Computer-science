function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map();

    for (const letter of magazine) {
        map.set(letter, (map.get(letter) || 0) + 1);
    }

    for (const letter of ransomNote) {
        if (!map.has(letter) || map.get(letter) <= 0) {
            return false;
        }
        map.set(letter, (map.get(letter) - 1));
    }

    return true;
}

// Time: O(n);
// Space: O(n);

const result = canConstruct('aa', 'aab');
console.log(result);
