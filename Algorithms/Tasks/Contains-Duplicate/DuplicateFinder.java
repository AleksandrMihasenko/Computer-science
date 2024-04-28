import java.util.HashMap;

public class DuplicateFinder {
    public static void main(String[] args) {}

    public static boolean containsDuplicate(int[] nums) {
        HashMap<Integer, Integer> hash = new HashMap<>();

        for (int num : nums) {
            if (hash.containsKey(num) && hash.get(num) >= 1)
                return true;
            hash.put(num, hash.getOrDefault(num, 0) + 1);
        }

        return false;
    }
}
