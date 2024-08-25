function areOccurrencesEqual(s: string): boolean {
    const map = new Map();
    const set = new Set();

    for (const char of s) {
        map.set(char, (map.get(char) ?? 0) + 1);
    }

    // @ts-ignore
    for (const value of map.values()) {
        set.add(value);
    }

    return set.size === 1;
}

// Time: O(n);
// Space: O(k), where k is the number of characters that could be in the input;

const result = areOccurrencesEqual('abacbc');
console.log(result);
