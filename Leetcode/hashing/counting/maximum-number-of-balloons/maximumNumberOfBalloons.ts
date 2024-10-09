function maxNumberOfBalloons(text: string): number {
    const map = { b: 0, a: 0, l: 0, o: 0, n: 0, };

    for (const letter of text) {
        map[letter]++;
    }

    return Math.floor(
        Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n)
    );
}

// Time: O(n);
// Space: O(k);

const result = maxNumberOfBalloons('nlaebolko');
console.log(result);
