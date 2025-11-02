public List<List<Integer>> findWinners(int[][] matches) {
    Set<Integer> seen = new HashSet<>();
    Map<Integer, Integer> losersCount = new HashMap<>();

    for (int[] match : matches) {
        int winner = match[0];
        int loser = match[1];
        seen.add(winner);
        seen.add(loser);

        losersCount.put(loser, losersCount.getOrDefault(loser, 0) + 1);
    }

    List<List<Integer>> answer = Arrays.asList(new ArrayList<>(), new ArrayList<>());

    for (int player : seen) {
        if (!losersCount.containsKey(player)) {
            answer.get(0).add(player);
        } else if (losersCount.get(player) == 1) {
            answer.get(1).add(player);
        }
    }

    Collections.sort(answer.get(0));
    Collections.sort(answer.get(1));

    return answer;
}

// Time: O(n * log n);
// Space: O(n);
