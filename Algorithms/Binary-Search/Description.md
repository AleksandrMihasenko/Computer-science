# Binary Search

The algorithm compares the key value with the middle element of the array. If they are unequal, the half in which the key can't be part of this eliminated, and the search continues for the remaining half until it succeeds.
The key aspect here is that the array is already sorted.
Complexity O(log n).

#### Example 1:
```
Input: nums = [1,2,3,1]
Output: true
```

#### Example 2:
```
Input: nums = [1,2,3,4]
Output: false
```

#### Example 3:
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

#### Constraints:
```
1 <= nums.length <= 105
-109 <= nums[i] <= 109
```
