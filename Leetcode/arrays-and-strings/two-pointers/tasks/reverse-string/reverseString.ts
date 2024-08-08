function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const leftValue = s[left];
        s[left] = s[right];
        s[right] = leftValue;

        left++;
        right--;
    }

    console.log(s);
}

reverseString(['h', 'e', 'l', 'l', 'o']);
