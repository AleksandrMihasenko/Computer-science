public int[] getAverages(int[] nums, int k) {
    if (k == 0) {
        return nums;
    }

    int size = (k * 2) + 1;
    int[] averages = new int[nums.length];
    Arrays.fill(averages, -1);

    if (size > nums.length) {
        return averages;
    }

    long[] prefix = new long[nums.length + 1];
    for (int i = 0; i < nums.length; ++i) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    for (int i = k; i < (nums.length - k); ++i) {
        int leftBound = i - k;
        int rightBound = i + k;

        long subArraySum = prefix[rightBound + 1] - prefix[leftBound];
        int average = (int) (subArraySum / size);
        averages[i] = average;
    }

    return averages;
}
