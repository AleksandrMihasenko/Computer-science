public class MergeSortExample {
    public static void mergeSort(int[] array, int begin, int end, int middle) {
        int initIndexLeft;
        int initIndexRight;
        int initIndexMergedArray;

        int left = middle - begin + 1;
        int right = end - middle;

        int LeftArray[] = new int[left];
        int RightArray[] = new int[right];

        for (int i = 0; i < left; i++) {
            LeftArray[i] = array[begin + i];
        }
        for (int i = 0; i < right; i++) {
            RightArray[i] = array[middle + i + 1];
        }

        initIndexLeft = 0;
        initIndexRight = 0;
        initIndexMergedArray = begin;

        while (initIndexLeft < left && initIndexRight < right) {
            if (LeftArray[initIndexLeft] < RightArray[initIndexRight]) {
                array[begin] = LeftArray[initIndexLeft];
                initIndexLeft++;
            } else {
                array[begin] = RightArray[initIndexRight];
                initIndexRight++;
            }
            initIndexMergedArray++;
        }
        while (initIndexLeft < left) {
            array[begin] = LeftArray[initIndexLeft];
            initIndexLeft++;
            initIndexMergedArray++;
        }
        while (initIndexRight < right) {
            array[begin] = RightArray[initIndexRight];
            initIndexRight++;
            initIndexMergedArray++;
        }
    }

    void merge(int[] array, int begin, int end) {
        if (begin < end) {
            int mid = (begin + end) / 2;
            merge(array, begin, mid);
            merge(array, mid + 1, end);
            mergeSort(array, begin, end, mid);
        }
    }
}