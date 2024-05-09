public class BinarySearchExample {
    public static boolean BinarySearch(int[] sortedArray, int target, int low, int high) {
        int index = Integer.MIN_VALUE;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (sortedArray[mid] < target) {
                low = mid + 1;
            } else if (sortedArray[mid] > target) {
                high = mid - 1;
            } else if (sortedArray[mid] == target) {
                index = mid;
                break;
            }
        }

        return index;
    }
}
