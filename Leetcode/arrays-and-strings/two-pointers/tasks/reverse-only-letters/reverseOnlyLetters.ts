function reverseOnlyLetters(s: string): string {
    const regex = /^[a-zA-Z]$/;
    const array = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (!regex.test(array[left])) {
            left++
        } else if (!regex.test(array[right])) {
            right--
        } else {
            const temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }

    return array.join('');
}

// Time: O(n);
// Space: O(n);

const result = reverseOnlyLetters('ab-cd');
console.log(result);
