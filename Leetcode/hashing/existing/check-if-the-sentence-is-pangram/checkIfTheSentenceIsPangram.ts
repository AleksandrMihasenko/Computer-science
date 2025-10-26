function checkIfPangram(sentence: string): boolean {
    const set = new Set();

    for (let i = 0; i < sentence.length; i++) {
        set.add(sentence[i]);
    }

    return set.size === 26;
}

// Time: O(n);
// Space: O(1) | O(n);

const result = checkIfPangram('thequickbrownfoxjumpsoverthelazydog');
console.log(result);
