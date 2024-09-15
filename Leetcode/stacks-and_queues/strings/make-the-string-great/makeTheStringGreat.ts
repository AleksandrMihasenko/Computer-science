function makeGood(s: string): string {
    const stack: string[] = [];

    for (const letter of s) {
        const lastLetter = stack[stack.length - 1];
        if (
            stack.length &&
            (letter !== lastLetter && letter.toLowerCase() === lastLetter.toLowerCase())
        ) {
            stack.pop();
        } else {
            stack.push(letter)
        }
    }

    return stack.join('');
}

// Time: O(n);
// Space: O(n);

const result = makeGood('leEeetcode');
console.log(result);
