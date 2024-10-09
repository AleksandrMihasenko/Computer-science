function numJewelsInStones(jewels: string, stones: string): number {
    const jewelsMap = new Map();
    let result = 0;

    for (const jewel of jewels) {
        jewelsMap.set(jewel, 0);
    }

    for (const stone of stones) {
        if (jewelsMap.has(stone)) result++;
    }

    return result;
}

// Time: O(n);
// Space: O(n);

const result = numJewelsInStones('aA', 'aAAbbbb');
console.log(result);
