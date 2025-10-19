public int missingNumber(int[] nums) {
    Set<Integer> numsSet = new HashSet<>();

    for (int num: nums) {
        numsSet.add(num);
    }

    for (int i = 0; i < nums.length + 1; i++) {
        if (!numsSet.contains(i)) {
            return i;
        }
    }

    return -1;
}

//Time complexity : O(n)

//Because the set allows for O(1) containment queries, the main loop
//runs in O(n) time. Creating num_set costs O(n) time, as each set insertion
//runs in amortized O(1) time, so the overall runtime is O(n+n)=O(n).

//Space complexity : O(n)
