function findWinners(matches: number[][]): number[][] {
    const zeroLoss = new Set<number>();
    const oneLoss = new Set<number>();
    const moreLoss = new Set<number>();

    for (const [winner, loser] of matches) {
        if (!oneLoss.has(winner) && !moreLoss.has(winner)) {
            zeroLoss.add(winner);
        }
        if (zeroLoss.has(loser)) {
            zeroLoss.delete(loser);
            oneLoss.add(loser);
        } else if (oneLoss.has(loser)) {
            oneLoss.delete(loser);
            moreLoss.add(loser);
        } else if (moreLoss.has(loser)) {
            continue;
        } else {
            oneLoss.add(loser);
        }
    }

    return [
        Array.from(zeroLoss).sort((a, b) => a - b),
        Array.from(oneLoss).sort((a, b) => a - b)
    ];
}

// Time: O(n * log n);
// Space: O(n);

const result = findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]);
console.log(result);
