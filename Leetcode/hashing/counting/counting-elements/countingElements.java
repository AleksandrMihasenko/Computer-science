public int countElements(int[] arr) {
    Set<Integer> numsSet = new HashSet<>();
    int result = 0;

    for (int num : arr) {
        numsSet.add(num);
    }

    for (int i = 0; i < arr.length; i++) {
        if (numsSet.contains(arr[i] + 1)) {
            result++;
        }
    }

    return result;
}
