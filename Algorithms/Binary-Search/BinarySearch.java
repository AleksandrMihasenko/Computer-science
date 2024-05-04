public class BinarySearch {
    public static boolean BinarySearchRun(int[] sortedArray, int target, int low, int high) {
        int index = Integer.MIN_VALUE;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (sortedArray[mid] < target) {
                low = mid + 1;
            } else if (sortedArray[mid] > target) {
                high = mid - 1;
            } else if (sortedArray == target) {
                index = mid;
                break;
            }
        }

        return index;
    }
}
