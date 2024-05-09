public class SelectionSortExample {
    public static boolean selectionSort(int[] array) {
        for (int i = 0; i < array.length - 1; i++) {
            int minIndex = i;

            for (int j = i + 1; j < array.length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }

            int smallerNumber = array[minIndex];
            array[minIndex] = array[i];
            array[i] = smallerNumber;
        }
    }
}