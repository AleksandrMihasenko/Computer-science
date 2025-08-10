class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] result = new int[nums.length];
        int left = 0;
        int right = nums.length - 1;

        for (int i = nums.length - 1; i >= 0; i--) {
            if (Math.abs(nums[left]) > Math.abs(nums[right])) {
                result[i] = (int) Math.pow(nums[left], 2);
                left++;
            } else {
                result[i] = (int) Math.pow(nums[right], 2);
                right--;
            }
        }

        return result;
    }
}
