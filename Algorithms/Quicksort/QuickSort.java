public class QuicksortExample {
    public static void quicksort(int[] array, int low, int high) {
        if (low < high) {
            int partIndex = partition(array, low, high);

            quicksort(array, low, partIndex - 1);
            quicksort(array, partIndex + 1, high);
        }
    }

    public static int partition(int[] array, int low, int high) {
        int pivot = array[high];
        int i = low - 1;

        for (int j = low; j <= high; j++) {
            if (array[j] < pivot) {
                i++;
                swap(array, i, j);
            }
        }

        swap(array, i + 1, high);
        return i + 1;
    }

    public static void swap(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
