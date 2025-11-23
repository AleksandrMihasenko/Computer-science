public int maxNumberOfBalloons(String text) {
    int aCount = 0, bCount = 0, lCount = 0, oCount = 0, nCount = 0;

    for (int i = 0; i < text.length(); i++) {
        if (text.charAt(i) == 'b') {
            bCount++;
        } else if (text.charAt(i) == 'a') {
            aCount++;
        } else if (text.charAt(i) == 'l') {
            lCount++;
        } else if (text.charAt(i) == 'o') {
            oCount++;
        } else if (text.charAt(i) == 'n') {
            nCount++;
        }
    }

    lCount = lCount / 2;
    oCount = oCount / 2;

    return Math.min(aCount, Math.min(bCount, Math.min(lCount, Math.min(oCount, nCount))));
}

// Time complexity: O(N)
// Space complexity: O(1)