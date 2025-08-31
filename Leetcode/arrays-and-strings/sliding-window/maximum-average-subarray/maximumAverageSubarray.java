public double findMaxAverage(int[] nums, int k) {
    double current = 0;

    for (int i = 0; i < k; i++) {
        current += nums[i];
    }

    double answer = current;

    for (int i = k; i < nums.length; i++) {
        current += nums[i] - nums[i - k];
        answer = Math.max(answer, current);
    }

    return answer / k;
}
