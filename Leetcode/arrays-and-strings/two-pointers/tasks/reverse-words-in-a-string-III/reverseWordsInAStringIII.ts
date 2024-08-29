function reverseWords(s: string): string {
    let lastSpaceIndex = -1;
    const arrayOfChars = s.split('');

    for (let stringIndex = 0; stringIndex <= arrayOfChars.length; stringIndex++) {
        if (stringIndex === arrayOfChars.length || arrayOfChars[stringIndex] === ' ') {
            let startIndex = lastSpaceIndex + 1;
            let endIndex = stringIndex - 1;

            while (startIndex < endIndex) {
                const temp = arrayOfChars[startIndex];
                arrayOfChars[startIndex] = arrayOfChars[endIndex];
                arrayOfChars[endIndex] = temp;
                startIndex++;
                endIndex--;
            }

            lastSpaceIndex = stringIndex;
        }
    }

    return arrayOfChars.join('');
}

// Time: O(n + n) => O(n);
// Space: O(n);

const result = reverseWords('Let\'s take LeetCode contest');
console.log(result);
