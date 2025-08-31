public int maxConsecutiveOnes(int[] nums, int k) {
    int left = 0;
    int current = 0;
    int answer = 0;

    for (int right = 0; right < nums.length; right++) {
        if (nums[right] == 0) {
            current++;
        }

        while (current > k) {
            if (nums[left] == 0) {
                current--;
            }

            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
}
