function reversePrefix(word: string, ch: string): string {
    let result = word.split('');
    let left = 0;

    for (let right = 0; right < word.length; right++) {
        if (result[right] === ch) {
            while (left < right) {
                let temp = result[left];
                result[left] = result[right];
                result[right] = temp;
                left++;
                right--;
            }

            return result.join('');
        }
    }

    return word;
}

// Time: O(n);
// Space: O(n);

const result = reversePrefix('abcdefd', 'd');
console.log(result);
