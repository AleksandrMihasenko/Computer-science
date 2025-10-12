public String reverseWords(String s) {
    int lastSpaceIndex = -1;
    char[] arrayOfChars = s.toCharArray();

    for (int i = 0; i <= s.length(); i++) {
        if (i == s.length() || arrayOfChars[i] == ' ') {
            int startIndex = lastSpaceIndex + 1;
            int endIndex = i - 1;

            while (startIndex < endIndex) {
                char temp = arrayOfChars[startIndex];
                arrayOfChars[startIndex] = arrayOfChars[endIndex];
                arrayOfChars[endIndex] = temp;
                startIndex++;
                endIndex--;
            }

            lastSpaceIndex = i;
        }
    }

    return new String(arrayOfChars);
}

// Time: O(n + n) => O(n);
// Space: O(n);
